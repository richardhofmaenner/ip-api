import test from "ava";
import got, {Response} from "got";
import {server} from "../server";

test.before(async () => {
  await server
})

test('Server is running', async t => {
  const res: Response = await got.get('http://localhost:3000/')
  t.is(res.statusCode, 200)
});

test('Route returns correct IP address with default Header', async t => {
  const res: Response = await got.get('http://localhost:3000/')
  t.is(res.headers["content-type"], 'application/json; charset=utf-8')
  if (typeof res.body === "string") {
    const body: any = JSON.parse(res.body)
    t.is(body.ipAddress, '::ffff:127.0.0.1')
  }
})

test.after.always(async () => {
  await server.emit("close")
})
