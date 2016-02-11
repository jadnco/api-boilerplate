# User

## Properties

| Name | Type | Default Value | Description
| --- | --- | --- | ---
| `name` | `String` | | Full/custom name of user.
| `email` | `String` | | Email address used to sign up.
| `description` | `String` | | Description of user, serves as the bio. 
| `created` | `Date` | `Date.now` | When the record was created.

## Retrieving a single User

```
GET users/:id
```

### Response

```js
{
  "user": {
    "name": "John Smith",
    "email": "smith@example.com",
    "description": "Just a normal dude with a normal name.",
    "_id": "56b95ffa9a663798f7c98330",
    "created": "2016-02-09T03:41:46.934Z",
  }
}
```
