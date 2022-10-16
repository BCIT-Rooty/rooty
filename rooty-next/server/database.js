
export const categoryList = [
    { id: 1, name: 'FINANCE & BUSINESS' },
    { id: 2, name: 'BROADCAST & MEDIA' },
    { id: 3, name: 'TUTORING' },
    { id: 4, name: 'ARTS & DESIGN' },
    { id: 5, name: 'MARKETING' },
];

export const items = [
    {
        id: 1,
        name: 'item1',
        rating: 5,
        description: 'item1 description',
        categoryId: 1
    },
    {
        id: 2,
        name: 'item2',
        rating: 4,
        description: 'item2 description',
        categoryId: 1
    },
    {
        id: 3,
        name: 'item3',
        rating: 3,
        description: 'item3 description',
        categoryId: 2
    },
    {
        id: 4,
        name: 'item4',
        rating: 2,
        description: 'item4 description',
        categoryId: 2
    },
];



export async function getItemsForEachCategory(categoryId){
    return items.filter(item => item.categoryId === categoryId)
};

