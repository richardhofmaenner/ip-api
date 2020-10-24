# IP API

### What does this?
This is a small web server which return the (public) IP Address of the requesting device.
It works also behind the Cloudflare Proxy and works with IPv4 and IPv6.

### How do I start a request?
Just make a `GET` request to the home route `/`.

### What is the response of the request?
The server returns a JSON response like this:
```json
{
  "ipAddress": "146.240.30.20"
}
```
