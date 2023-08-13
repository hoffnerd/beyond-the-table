import prisma from './db';

export const readNavigation = async () => {
    const navigation = await prisma.navigation.findMany({
        orderBy: [ { order: 'asc' } ] 
    });
    return navigation;
}

export const readNavigationById = async (id) => {
    const navigation = await prisma.navigation.findUnique({
        where: { id }
    });
    return navigation;
}