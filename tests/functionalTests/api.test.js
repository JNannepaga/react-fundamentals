import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {loadUsers} from '../../src/Testing/api';

describe("Malips API :: Welcome API calls", () => {

beforeEach(() => jest.resetAllMocks());

  it("Should fetch users", () => {
    const userMockData = {
        userId: 1,
        id: 1,
        title: "test",
        completed: false
    };
    const mock = new MockAdapter(axios);
    mock.onGet().reply(200, userMockData);

    return  loadUsers()
            .then(resp =>
            {
                expect(resp).toEqual(userMockData);
            });
    });
});