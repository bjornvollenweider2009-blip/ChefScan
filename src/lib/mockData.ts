// Types
export type Recipe = {
  id: string;
  title: string;
  ingredients: string[];
  steps: string[];
  time: string;
  difficulty: string;
  tags: string[];
};

export type MealDay = {
  day: string;
  lunch: string;
  dinner: string;
};

// Logique de génération de recettes
export const generateRecipes = (
  ingredients: string,
  people: number,
  budget: string,
  goal: string
): Recipe[] => {
  const mainIng = ingredients.split(','),[object Object], || "Légumes";
  
  return [
    {
      id: "1",
      title: `Wok de ${mainIng} et Riz Basmati`,
      ingredients: [mainIng, "Riz Basmati", "Sauce Soja", "Ail", "Gingembre"],
      steps: [
        "Cuire le riz selon les instructions.",
        "Couper les ingrédients en dés.",
        "Faire sauter au wok à feu vif.",
        "Mélanger avec la sauce et servir."
      ],
      time: "20 min",
      difficulty: "Facile",
      tags: [budget, goal === "perte" ? "Faible Calorie" : "Énergétique"]
    },
    {
      id: "2",
      title: `Gratin Familial aux ${mainIng}`,
      ingredients: [mainIng, "Pommes de terre", "Crème liquide", "Fromage râpé"],
      steps: [
        "Préchauffer le four à 200°C.",
        "Disposer les couches de légumes.",
        "Ajouter la crème et le fromage.",
        "Cuire 45 minutes."
      ],
      time: "55 min",
      difficulty: "Moyen",
      tags: ["Familial", "Réconfortant"]
    },
    {
      id: "3",
      title: `Salade Composée ${mainIng} & Protéines`,
      ingredients: [mainIng, "Oeufs durs", "Maïs", "Vinaigrette", "Thon"],
      steps: [
        "Laver les légumes.",
        "Mélanger tous les ingrédients dans un saladier.",
        "Assaisonner juste avant de servir."
      ],
      time: "10 min",
      difficulty: "Très facile",
      tags: ["Frais", "Rapide"]
    }
  ];
};

// Logique de plan de repas
export const generateMealPlan = (goal: string): MealDay[] => {
  const days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
  const type = goal === "masse" ? "Hyperprotéiné" : goal === "perte" ? "Léger" : "Équilibré";

  return days.map(day => ({
    day,
    lunch: `Bowl ${type} (Poulet/Quinoa)`,
    dinner: `Soupe ou Poêlée ${type}`
  }));
};

// Logique de liste de courses
export const getShoppingList = () => {
  return {
    "Fruits & Légumes": ["Tomates", "Courgettes", "Salade", "Citrons", "Oignons"],
    "Protéines": ["Poulet (500g)", "Oeufs (x6)", "Saumon", "Tofu"],
    "Épicerie": ["Riz", "Pâtes", "Huile d'olive", "Épices", "Sel/Poivre"],
    "Frais": ["Yaourts", "Fromage râpé", "Beurre"]
  };
};
