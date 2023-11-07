const request = require('supertest');
const app = require('../index');

describe('Weather Endpoint', () => {
  it('fetches weather data for Stockholm', async () => {
    const response = await request(app)
      .get('/weather/stockholm');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      temperature: 15,
      humidity: 60,
      wind: '5 m/s',
    });
  });
});
