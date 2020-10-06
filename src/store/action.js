import * as types from './mutations_type'

export const actionIncrease = ({commit}, num) =>{
    console.log('actionIncrease', num);
    commit(types.INCREASE , num);
}

export const actionDecrease = ({commit}, num) =>{
    console.log('actionDecrease', num);
    commit(types.DECREASE, num);
}

export const actionCountReset = ({commit, num}) =>{
    console.log('actionCountReset', num)
    commit(types.COUNT_RESET, num)
}