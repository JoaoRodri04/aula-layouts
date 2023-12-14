import { beerOutline, golfOutline, pulseOutline, restaurantOutline } from "ionicons/icons";

interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string;
    prepTime: string;
    cookTime: string;
    servings: number;
    image: string;
}

const getInboxItems = (): Recipe[] => [
    {
            "id": 1,
            "name": "Bacalhau à Brás",
            "ingredients": [
                "500g de bacalhau desfiado",
                "500g de batatas fritas",
                "6 ovos",
                "2 cebolas",
                "3 dentes de alho",
                "Salsa q.b.",
                "Azeitonas para decorar"
            ],
            "instructions": "Cozinhe o bacalhau e desfie. Refogue as cebolas e alho, adicione o bacalhau desfiado e misture com as batatas fritas. Adicione os ovos batidos e mexa até ficar cremoso. Decore com salsa e azeitonas.",
            "prepTime": "30 minutos",
            "cookTime": "30 minutos",
            "servings": 4,
            "image": "https://fh-sites.imgix.net/sites/2712/2020/07/16140235/3.-bacalhau-a-bras.jpg?"
        },
        {
            "id": 2,
            "name": "Caldo Verde",
            "ingredients": [
                "1 couve galega",
                "500g de batatas",
                "Chouriço q.b.",
                "2 dentes de alho",
                "Azeite q.b.",
                "Sal e pimenta q.b."
            ],
            "instructions": "Cozinhe as batatas e a couve. Refogue o alho no azeite, adicione as batatas esmagadas, a couve cortada finamente e o chouriço cortado às rodelas. Tempere com sal e pimenta.",
            "prepTime": "20 minutos",
            "cookTime": "30 minutos",
            "servings": 6,
            "image": "https://fh-sites.imgix.net/sites/2712/2020/07/16140235/3.-bacalhau-a-bras.jpg?"
        },
        {
            "id": 3,
            "name": "Francesinha",
            "ingredients": [
                "4 salsichas frescas",
                "4 bifes finos de carne de vaca",
                "8 fatias de presunto",
                "8 fatias de queijo",
                "Molho picante q.b.",
                "Molho de cerveja q.b.",
                "Pão de forma q.b."
            ],
            "instructions": "Grelhe as salsichas, os bifes e as fatias de presunto. Num pão, coloque um bife, uma salsicha, duas fatias de queijo e duas fatias de presunto. Repita e finalize com molho picante e de cerveja.",
            "prepTime": "25 minutos",
            "cookTime": "15 minutos",
            "servings": 2,
            "image": "https://fh-sites.imgix.net/sites/2712/2020/07/16140235/3.-bacalhau-a-bras.jpg?"
        },
        {
            "id": 4,
            "name": "Arroz de Pato",
            "ingredients": [
                "1 pato",
                "300g de arroz",
                "1 chouriço",
                "1 cebola",
                "2 dentes de alho",
                "Azeite q.b.",
                "Vinho branco q.b."
            ],
            "instructions": "Coza o pato e desfie. Refogue a cebola e alho no azeite, junte o chouriço cortado às rodelas, o pato desfiado e o arroz. Adicione vinho branco e cozinhe.",
            "prepTime": "1 hora",
            "cookTime": "40 minutos",
            "servings": 8,
            "image": "https://fh-sites.imgix.net/sites/2712/2020/07/16140235/3.-bacalhau-a-bras.jpg?"
        },
        {
            "id": 5,
            "name": "Pastéis de Nata",
            "ingredients": [
                "Massa folhada",
                "500ml de leite",
                "150g de açúcar",
                "40g de farinha",
                "6 gemas",
                "Casca de limão",
                "Canela em pó q.b."
            ],
            "instructions": "Estenda a massa folhada em forminhas. Ferva o leite com a casca de limão. Numa tigela, misture o açúcar e a farinha, adicionando as gemas. Adicione o leite fervido à mistura, mexendo sempre. Leve ao fogo até engrossar. Coloque o creme nas forminhas e leve ao forno até dourar. Polvilhe com canela.",
            "prepTime": "30 minutos",
            "cookTime": "20 minutos",
            "servings": 12,
            "image": "https://fh-sites.imgix.net/sites/2712/2020/07/16140235/3.-bacalhau-a-bras.jpg?"
        },
        {
            "id": 6,
            "name": "Feijoada à Portuguesa",
            "ingredients": [
                "500g de feijão branco",
                "300g de entrecosto",
                "200g de chouriço",
                "200g de morcela",
                "200g de linguiça",
                "2 cebolas",
                "3 dentes de alho",
                "Azeite q.b."
            ],
            "instructions": "Coza o feijão e reserve. Refogue a cebola e alho no azeite, junte o entrecosto, o chouriço, a morcela e a linguiça cortados às rodelas. Adicione o feijão e cozinhe até os sabores se misturarem.",
            "prepTime": "40 minutos",
            "cookTime": "1 hora",
            "servings": 6,
            "image": "https://fh-sites.imgix.net/sites/2712/2020/07/16140235/3.-bacalhau-a-bras.jpg?"
        },
        {
            "id": 7,
            "name": "Bolo de Chocolate",
            "ingredients": [
                "200g de chocolate",
                "200g de manteiga",
                "200g de açúcar",
                "4 ovos",
                "150g de farinha",
                "1 colher de chá de fermento",
                "Sal q.b."
            ],
            "instructions": "Derreta o chocolate com a manteiga. Bata os ovos com o açúcar até obter um creme esbranquiçado. Misture o chocolate derretido. Adicione a farinha, o fermento e uma pitada de sal. Leve ao forno por 25 minutos.",
            "prepTime": "20 minutos",
            "cookTime": "25 minutos",
            "servings": 8,
            "image": "https://fh-sites.imgix.net/sites/2712/2020/07/16140235/3.-bacalhau-a-bras.jpg?"
        },
        // Adiciona mais 9 receitas aqui...
    ];       

    export {getInboxItems};