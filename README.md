# ISR
This Project is to improve image quality.

## How to Run

### Local
```
cd client
cd npm run build
cd ../
pip install --upgrade pip
pip install -e ".[gpu]" --ignore-installed
pip3 install flask 
pip3 install requests
pip3 install flask_cors
python3 ./src/server.py 
```

### Docker

```
sudo docker build -t {Docker Path}:{Tag} .
sudo docker run -p {Expose Port}:80 {Docker Path}:{Tag}
```