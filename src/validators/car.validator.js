import Joi from "joi";

const carValidator = Joi.object({
    model:Joi.string().regex(/^[a-zA-ZА-яЁёіІЇїґҐєЄ]{1,30}$/).required().messages({
        'string.pattern.base' : 'Тільки букви мін 1 макс 30 символів'
    }),
    price:Joi.number().min(0).max(1000000).required({

    }),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
});

export {carValidator};