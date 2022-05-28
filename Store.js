import axios from 'axios';
import create from 'zustand';
import { getApi } from '../common/CommonApi';

export const useAppStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
  decreasePopulation: () => set(state => ({bears: state.bears - 1})),
  removeAllBears: () => set({bears: 0}),
}));

export const apiStore = create(set => ({
  users: [],
  getUsers: async endPoint => {
    const response = getApi(endPoint);
    set({users: await response});
  },
}));
