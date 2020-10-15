const { formatBlockArr } = require('./utils');

describe('formatBlockArr', () => {
  it('returns an empty array when passed an empty array', () => {
    expect(formatBlockArr([])).toEqual([]);
  });
  it('returns a new array', () => {
    const testArr = [
      {
        _id: '5f86c801e95026a57aac99cb',
        number: 1,
        name: 'Fundamentals',
        slug: 'fun',
      },
      {
        _id: '5f86c801e95026a57aac99cb',
        number: 1,
        name: 'Fundamentals',
        slug: 'fun',
      },
      {
        _id: '5f86c801e95026a57aac99cb',
        number: 1,
        name: 'Fundamentals',
        slug: 'fun',
      },
    ];
    expect(formatBlockArr(testArr)).not.toBe(testArr);
  });
  it('does not mutate original array', () => {
    const testArr = [
      {
        _id: '5f86c801e95026a57aac99cb',
        number: 1,
        name: 'Fundamentals',
        slug: 'fun',
      },
      {
        _id: '5f86c801e95026a57aac99cb',
        number: 1,
        name: 'Fundamentals',
        slug: 'fun',
      },
      {
        _id: '5f86c801e95026a57aac99cb',
        number: 1,
        name: 'Fundamentals',
        slug: 'fun',
      },
    ];
    formatBlockArr(testArr);
    const control = [
      {
        _id: '5f86c801e95026a57aac99cb',
        number: 1,
        name: 'Fundamentals',
        slug: 'fun',
      },
      {
        _id: '5f86c801e95026a57aac99cb',
        number: 1,
        name: 'Fundamentals',
        slug: 'fun',
      },
      {
        _id: '5f86c801e95026a57aac99cb',
        number: 1,
        name: 'Fundamentals',
        slug: 'fun',
      },
    ];
    expect(control).toEqual(testArr);
  });
  it('returns array containing block count items', () => {
    const testArr = [
      {
        _id: '5f86c801e95026a57aac99cb',
        number: 1,
        name: 'Fundamentals',
        slug: 'fun',
      },
      {
        _id: '5f86c801e95026a57aac99cb',
        number: 1,
        name: 'Fundamentals',
        slug: 'fun',
      },
      {
        _id: '5f86c801e95026a57aac99cb',
        number: 1,
        name: 'Fundamentals',
        slug: 'fun',
      },
    ];
    expect(formatBlockArr(testArr)).toEqual(['Fundamentals: 3']);
  });
});
