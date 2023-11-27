
import prisma from './db';
import { isObj } from '@/util';


//______________________________________________________________________________________
// ===== Prisma Functions =====

export const readCharacters = async (where) => {
    const characters = await prisma.character.findMany({ 
        where,
        orderBy: [ { createdAt: 'desc' } ]  
    });
    return characters;
}

export const readCharacterById = async (id) => {
    const character = await prisma.character.findUnique({ 
        where: { id } 
    });
    return character;
}

export const readCharacterByIdFromParams = async (params) => {
    const id = isObj(params, [ 'id' ]) ? params.id : null;
    const character = id ? await readCharacterById(id) : null;
    return character;
}

export const createCharacter = async (data) => {
    const character = await prisma.character.create({ 
        data:{
            userEmail: data.userEmail,
            visibility: data.visibility,
            name: data.name,
            baseData: data.baseData,
            abilities: data.abilities,
            image: data.image,
            skills: data.skills
        }
    });
    return character;
}
export const updateCharacter = async (id, data) => {
    const character = await prisma.character.update({ 
        where: { id },
        data:{
            visibility: data.visibility,
            name: data.name,
            baseData: data.baseData,
            abilities: data.abilities,
            image: data.image,
            skills: data.skills,
            updatedAt: new Date(),
        }
    });
    return character;
}

export const updateCharactersImage = async (id, image) => {
    const character = await prisma.character.update({ 
        where: { id },
        data: { image, updatedAt: new Date() }
    });
    return character;
}

export const deleteCharacter = async (id) => {
    const character = await prisma.character.delete({ 
        where: { id }
    });
    return character;
}