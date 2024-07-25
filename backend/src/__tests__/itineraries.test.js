const request = require('supertest');
const app = require('../src/app');
const Itinerary = require('../src/models/Itinerary');

describe('Itinerary API', () => {
  beforeEach(async () => {
    await Itinerary.destroy({ where: {} });
  });

  test('POST /api/itineraries', async () => {
    const response = await request(app)
      .post('/api/itineraries')
      .send({
        title: 'Test Itinerary',
        description: 'Test Description',
        startDate: '2023-07-01',
        endDate: '2023-07-07'
      });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  // More tests...
});
