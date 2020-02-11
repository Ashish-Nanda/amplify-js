import { Adapter } from '..';
import AsyncStorageAdapter from '../asyncstorage';

const getDefaultAdapter: () => Adapter = () => {
	console.log('YO IN RN BITCHES');
	return AsyncStorageAdapter;
};

export default getDefaultAdapter;
