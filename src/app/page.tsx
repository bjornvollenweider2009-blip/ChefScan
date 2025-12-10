import Link from "next/link";
import { ArrowRight, ChefHat, CalendarCheck, ListChecks } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl">
          Cuisinez simplement avec <span className="text-primary">ChefScan</span>
        </h1>
        <p className="mb-10 text-lg text-slate-600 md:text-xl">
          Entrez vos ingrédients, obtenez des recettes sur mesure et générez votre plan de repas de la semaine en un clic.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link 
            href="/recipes" 
            className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-700"
          >
            Trouver une recette 
            <ArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-3">
        <FeatureCard 
          icon={<ChefHat className="h-10 w-10 text-primary" />}
          title="Générateur IA"
          desc="Transformez vos restes en plats gastronomiques instantanément."
        />
        <FeatureCard 
          icon={<CalendarCheck className="h-10 w-10 text-primary" />}
          title="Planning Hebdo"
          desc="Un plan de repas adapté à vos objectifs (perte de poids, muscle...)."
        />
        <FeatureCard 
          icon={<ListChecks className="h-10 w-10 text-primary" />}
          title="Liste Automatique"
          desc="Votre liste de courses générée automatiquement par rayons."
        />
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="rounded-2xl border bg-white p-8 shadow-sm transition hover:shadow-md">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
      <p className="text-slate-600">{desc}</p>
    </div>
  );
}
