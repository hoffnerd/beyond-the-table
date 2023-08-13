import prisma from './db';

export const readUploadsByUser = async (userEmail) => {
    const upload = await prisma.upload.findMany({ 
        where: { userEmail },
        orderBy: [ { createdAt: 'desc' } ]  
    });
    return upload;
}

export const createUpload = async (userEmail, filename) => {
    const upload = await prisma.upload.create({ 
        data: { userEmail, filename }
    });
    return upload;
}
