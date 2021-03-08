import { Module } from 'vuex';
import { state } from './state';
import { mutations } from './mutation';
import { actions } from './action';
import getters from './getter';
import { State } from './types';

export const moduleCommon : Module<State,any> = {
    namespaced : true,
    state,
    mutations,
    actions,
    getters,
}