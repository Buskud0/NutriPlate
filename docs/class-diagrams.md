# Class diagrams (draft v1)

Two views are prepared; to confirm with the lecturer which kind is expected.

## 1. Domain (conceptual) class diagram

```mermaid
classDiagram
  class User {
    +UUID id
    +String email
  }
  class NutritionProfile {
    +float targetCalories
    +float targetProtein
    +float targetCarbs
    +float targetFat
    +String[] dietaryPreferences
    +String[] allergies
    +String[] avoidedIngredients
    +int mealsPerDay
  }
  class Food {
    +UUID id
    +String name
    +String imageUrl
    +String category
    +float calories
    +float protein
    +float carbs
    +float fat
    +String[] allergens
    +boolean isVegetarian
    +boolean isVegan
  }
  class Recipe {
    +UUID id
    +String name
    +String imageUrl
    +String[] steps
    +int portions
    +totalNutrition() NutritionValues
    +nutritionPerPortion() NutritionValues
  }
  class Ingredient {
    +float quantityGrams
    +nutrition() NutritionValues
  }
  class Tag {
    +UUID id
    +String name
  }
  class DailyMealPlan {
    +UUID id
    +Date date
    +totalNutrition() NutritionValues
    +compareWithTargets(profile) GoalComparison
  }
  class PlannedRecipe {
    +MealType mealType
    +float portions
    +nutrition() NutritionValues
  }
  class NutritionValues {
    +float calories
    +float protein
    +float carbs
    +float fat
  }
  class MealType {
    <<enumeration>>
    BREAKFAST
    LUNCH
    DINNER
    SNACK
  }

  User "1" --> "0..1" NutritionProfile : has
  User "1" --> "0..*" Recipe : owns
  User "1" --> "0..*" Tag : owns
  User "1" --> "0..*" DailyMealPlan : plans
  Recipe "1" *-- "1..*" Ingredient : consists of
  Ingredient "0..*" --> "1" Food : refers to
  Recipe "0..*" -- "0..*" Tag : tagged with
  DailyMealPlan "1" *-- "0..*" PlannedRecipe : contains
  PlannedRecipe "0..*" --> "1" Recipe : uses
  PlannedRecipe --> MealType
```

## 2. Backend design (implementation) class diagram

Layers: routes/controllers (HTTP), services (business logic), Prisma (data access). Items marked *planned* come in later sprints.

```mermaid
classDiagram
  direction LR

  class AuthMiddleware {
    +requireAuth(req, res, next)
  }
  class MeController {
    +getMe(req, res)
  }
  class FoodController {
    <<planned>>
    +list(req, res)
    +getById(req, res)
  }
  class RecipeController {
    <<planned>>
    +create(req, res)
    +list(req, res)
    +update(req, res)
    +remove(req, res)
  }
  class TagController {
    <<planned>>
    +rename(req, res)
    +removeFromRecipe(req, res)
  }
  class ProfileController {
    <<planned>>
    +get(req, res)
    +save(req, res)
  }
  class MealPlanController {
    <<planned>>
    +suggest(req, res)
    +replaceRecipe(req, res)
    +adjustPortion(req, res)
    +overview(req, res)
  }

  class NutritionService {
    <<planned>>
    +recipeTotals(ingredients) NutritionValues
    +perPortion(totals, portions) NutritionValues
    +dayTotals(plannedRecipes) NutritionValues
    +compareWithTargets(totals, profile) GoalComparison
  }
  class TagService {
    <<planned>>
    +assign(recipeId, names)
    +rename(tagId, name)
    +removeFromRecipe(recipeId, tagId)
    +deleteUnused()
  }
  class PlannerService {
    <<planned>>
    +suggestDay(profile, recipes) DailyMealPlan
    +isCompatible(recipe, profile) boolean
    +adjustPortions(plan, targets)
  }

  class PrismaClient {
    +food
    +recipe
    +tag
    +nutritionProfile
    +dailyMealPlan
  }

  MeController ..> AuthMiddleware : behind
  FoodController ..> PrismaClient
  RecipeController --> NutritionService
  RecipeController --> TagService
  RecipeController ..> PrismaClient
  TagController --> TagService
  ProfileController ..> PrismaClient
  MealPlanController --> PlannerService
  MealPlanController --> NutritionService
  PlannerService --> NutritionService
  TagService ..> PrismaClient
```
