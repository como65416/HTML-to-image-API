# Html to image API

## Install & Running the app

```sh
npm install
node main.js
```

## Running the docker server

```sh
docker build -t=html-to-image-api .
```

```sh
docker run -d --restart=always \
    -p 3031:3031 \
    --name html-to-image-api-app \
    html-to-image-api
```

## How to use ?

```sh
curl --location 'http://localhost:3031/html-to-image' \
--header 'Content-Type: application/json' \
--data '{
    "html": "<div style='\''width: 100%; height: 100%; background-color: yellow;'\''>Hello Image</div>",
    "width": 200,
    "height": 200,
    "type": "png"
}' \
-o output.png
```
