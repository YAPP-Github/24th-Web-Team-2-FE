import { HttpResponse, http } from 'msw';

export const handlers = [
  http.get('/user', () => {
    return HttpResponse.json({
      data: {
        name: 'haha',
        age: 20,
      },
    });
  }),
];
