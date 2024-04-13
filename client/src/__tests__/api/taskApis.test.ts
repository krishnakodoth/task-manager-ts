//@ts-nocheck
// -- Need to configure (exclude Type for tests)
import axios from 'axios';
import { nodeApi, getTaskListApi } from '../../api/taskApis';

jest.mock('axios');

describe('getTaskListApi', () => {
  const mockTaskList = [{ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' }];

  test('calls axios.get with the correct URL', async () => {
    const axiosGetSpy = jest.spyOn(axios, 'get');
    await getTaskListApi();
    expect(axiosGetSpy).toHaveBeenCalledWith(`${nodeApi}/tasks`);
  });

  test('returns task list on successful request', async () => {
    axios.get.mockResolvedValue({ data: mockTaskList } as any); 
    const response = await getTaskListApi();
    expect(response.data).toEqual(mockTaskList);
  });

  test('throws error on request fails', async () => {
    const errorMessage = 'Failed to fetch tasks';
    axios.get.mockRejectedValue(new Error(errorMessage));
    await expect(getTaskListApi()).rejects.toThrow(errorMessage);
  });
});
