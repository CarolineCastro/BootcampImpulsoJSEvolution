import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getQuote } from './quoteService'

const response = { test: 'testing' };
//const response2 = { test: 'testing2' };

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.restHandlers());
afterAll(() => server.close());

test('transform json response into object', async () => {
    const quote = await getQuote();

    expect(quote).toStrictEqual(response);
});
