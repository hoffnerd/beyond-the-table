import { isArray } from '@/util';
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


export const createUploads = async (userEmail, files) => {
    if (!(userEmail && isArray(files))) return { error: true };
    const uploadsToCreate = files.map((file) => { return { userEmail, filename: file.key } });
    const uploads = await prisma.upload.createMany({ 
        data: uploadsToCreate,
        skipDuplicates: true
    });
    return uploads;
}
