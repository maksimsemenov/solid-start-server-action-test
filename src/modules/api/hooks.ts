import { createSignal } from "solid-js";
import { createServerAction$ } from "solid-start/server";

interface Entity {
    id: string
}

const createEntity = createServerAction$<Entity, Entity>(
    async(atributes: Entity): Promise<Entity> => {
        return atributes
    }
)

export const useCounter = () => {
    const [count, setCount] = createSignal(0);

    return { count, setCount }
}