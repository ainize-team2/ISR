FROM tensorflow/tensorflow:2.0.1-gpu-py3

# Install system packages
RUN apt-get update && apt-get install -y --no-install-recommends \
      bzip2 \
      g++ \
      git \
      graphviz \
      libgl1-mesa-glx \
      libhdf5-dev \
      openmpi-bin \
      screen \
      curl \
      wget && \
    rm -rf /var/lib/apt/lists/* \
    apt-get upgrade

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get install -y nodejs

RUN mkdir /home/isr
ENV TENSOR_HOME /home/isr
RUN mkdir /home/isr/client

WORKDIR /home/isr/client
ADD ./client/package.json ./package.json
ADD ./client/yarn.lock .yarn.lock
RUN npm install
RUN npm install -g typescript

WORKDIR $TENSOR_HOME
COPY weights ./weights
COPY config.yml ./
COPY setup.py ./
RUN pip install --upgrade pip
RUN pip install -e ".[gpu]" --ignore-installed
RUN pip3 install flask 
RUN pip3 install requests
RUN pip3 install flask_cors

WORKDIR /home/isr/client
ADD ./client/public ./public
ADD ./client/src ./src
ADD ./client/tsconfig.json ./tsconfig.json
RUN npm run build

WORKDIR $TENSOR_HOME
ENV PYTHONPATH ./ISR/:$PYTHONPATH
COPY ISR ./ISR
COPY src ./src
RUN mkdir ./src/images

ENTRYPOINT python3 ./src/server.py 
