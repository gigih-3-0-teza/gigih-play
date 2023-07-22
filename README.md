# Gigih Play
#### Author: [Teza Alfian](https://github.com/tezaalfian)

## Description
This API is used to manage the data of Gigih Play (Tokopedia Play Clone) application. This API is built using NodeJS and ExpressJS framework. This API is also connected to MongoDB.

## API Documentation
### Videos
#### Get All Videos
- Method: GET
- Endpoint: `/videos`
- Response Body Success :
```json
{
    "data": [
        {
            "id": "string",
            "title": "string",
            "thumbnail": "string",
            "description": "string",
            "urlEmbed": "string",
        }
    ]
}
```

#### Get Video By ID
- Method: GET
- Endpoint: `/videos/:id`
- Response Body Success :
```json
{
    "data": {
        "id": "string",
        "title": "string",
        "thumbnail": "string",
        "description": "string",
        "urlEmbed": "string",
    }
}
```
- Response Body Error :
```json
{
    "errors": [
        "string"
    ]
}
```

#### Add Video
- Method: POST
- Endpoint: `/videos`
- Request Body :
```json
{
    "title": "string",
    "thumbnail": "string",
    "description": "string",
    "urlEmbed": "string",
}
```
- Response Body Success :
```json
{
    "data": {
        "id": "string",
        "title": "string",
        "thumbnail": "string",
        "description": "string",
        "urlEmbed": "string",
    }
}
```
- Response Body Error :
```json
{
    "errors": [
        "string"
    ]
}
```

#### Update Video
- Method: PUT
- Endpoint: `/videos/:id`
- Request Body :
```json
{
    "title": "string",
    "thumbnail": "string",
    "description": "string",
    "urlEmbed": "string",
}
```
- Response Body Success :
```json
{
    "data": {
        "id": "string",
        "title": "string",
        "thumbnail": "string",
        "description": "string",
        "urlEmbed": "string",
    }
}
```
- Response Body Error :
```json
{
    "errors": [
        "string"
    ]
}
```

#### Delete Video
- Method: DELETE
- Endpoint: `/videos/:id`
- Response Body Success :
```json
{
    "data": "OK"
}
```
- Response Body Error :
```json
{
    "errors": [
        "string"
    ]
}
```

### Products
#### Get All Products
- Method: GET
- Endpoint: `/products`
- Query Params :
    - `video_id` : `string`
- Response Body Success :
```json
{
    "data": [
        {
            "id": "string",
            "name": "string",
            "price": "integer",
            "image": "string",
            "link": "string",
        }
    ]
}
```

#### Get Product By ID
- Method: GET
- Endpoint: `/products/:id`
- Response Body Success :
```json
{
    "data": {
        "id": "string",
        "name": "string",
        "price": "integer",
        "image": "string",
        "link": "string",
    }
}
```
- Response Body Error :
```json
{
    "errors": [
        "string"
    ]
}
```

#### Add Product
- Method: POST
- Endpoint: `/products`
- Request Body :
```json
{
    "name": "string",
    "price": "integer",
    "image": "file",
    "link": "string",
}
```
- Response Body Success :
```json
{
    "data": {
        "id": "string",
        "name": "string",
        "price": "integer",
        "image": "string",
        "link": "string",
    }
}
```
- Response Body Error :
```json
{
    "errors": [
        "string"
    ]
}
```

#### Update Product
- Method: PUT
- Endpoint: `/products/:id`
- Request Body :
```json
{
    "name": "string",
    "price": "integer",
    "image": "file",
    "link": "string",
}
```
- Response Body Success :
```json
{
    "data": {
        "id": "string",
        "name": "string",
        "price": "integer",
        "image": "string",
        "link": "string",
    }
}
```
- Response Body Error :
```json
{
    "errors": [
        "string"
    ]
}
```

#### Delete Product
- Method: DELETE
- Endpoint: `/products/:id`
- Response Body Success :
```json
{
    "data": "OK"
}
```
- Response Body Error :
```json
{
    "errors": [
        "string"
    ]
}
```

### Comments
#### Get All Comments
- Method: GET
- Endpoint: `/comments`
- Query Params :
    - `video_id` : `string`
- Response Body Success :
```json
{
    "data": [
        {
            "id": "string",
            "username": "string",
            "comment": "string",
            "timestamp": "datetime",
        }
    ]
}
```

#### Add Comment
- Method: POST
- Endpoint: `/comments`
- Request Body :
```json
{
    "username": "string",
    "comment": "string",
    "video_id": "string",
}
```
- Response Body Success :
```json
{
    "data": {
        "id": "string",
        "username": "string",
        "comment": "string",
        "timestamp": "datetime",
    }
}
```
- Response Body Error :
```json
{
    "errors": [
        "string"
    ]
}
```

#### Delete Comment
- Method: DELETE
- Endpoint: `/comments/:id`
- Response Body Success :
```json
{
    "data": "OK"
}
```
- Response Body Error :
```json
{
    "errors": [
        "string"
    ]
}
```