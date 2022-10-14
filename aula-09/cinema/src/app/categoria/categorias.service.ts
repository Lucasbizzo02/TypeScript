import { Categoria } from "./categoria2/categoria2.model";

export class CategoriasService {
    categorias: Categoria[] = [
    {id: 1, titulo: 'Terror', imagePath: '../../assets/images/filme-de-terror.png'},
    {id: 2, titulo: 'Ação', imagePath: '../../assets/images/spy.png'},
    {id: 3, titulo: 'Comédia', imagePath: '../../assets/images/comedia.png'},
    {id: 4, titulo: 'Romance', imagePath: '../../assets/images/passaros-do-amor.png'}
    ];


    constructor(){}

    listarCategorias(){
        return this.categorias;

    }
}