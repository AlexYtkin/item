const items = [
    {
        id: 1,
        title: 'Info',
        description: 'Items root page'
    },
    {
        id: 2,
        title: 'Item1',
        description: 'Items 2 render'
    },
    {
        id: 3,
        title: 'Item2',
        description: 'Items 3 render'
    }
];

const item = ((state=items, action) => {
    switch(action.type){
        default:
            return state;
    }

});
export default item;