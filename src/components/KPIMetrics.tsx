import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Target, TrendingUp, Users, MousePointer, MessageCircle, Clock, CheckCircle, ShoppingCart } from "lucide-react";

const kpiData = [
  {
    title: "Meta de Conversão",
    value: "3-7%",
    description: "E-book → Matrícula em 14 dias",
    icon: Target,
    color: "text-success",
    bgColor: "bg-success/10"
  },
  {
    title: "Lead Score MQL",
    value: "≥ 60 pontos",
    description: "Score mínimo para qualificação",
    icon: TrendingUp,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    title: "Visitas à LP",
    value: "≥ 2 visitas",
    description: "Sinal de interesse qualificado",
    icon: MousePointer,
    color: "text-warning",
    bgColor: "bg-warning/10"
  },
  {
    title: "Engajamento Vídeo",
    value: "> 50%",
    description: "Tempo mínimo de visualização",
    icon: TrendingUp,
    color: "text-accent",
    bgColor: "bg-accent/10"
  }
];

const metrics = [
  {
    category: "E-mail Marketing",
    items: [
      { name: "Open Rate (OR)", target: "> 25%", current: "Acompanhar" },
      { name: "Click Through Rate (CTR)", target: "> 3%", current: "Acompanhar" },
      { name: "% de Reply", target: "> 1%", current: "Acompanhar" }
    ]
  },
  {
    category: "WhatsApp",
    items: [
      { name: "% de Cliques", target: "> 15%", current: "Acompanhar" },
      { name: "Tempo até 1º contato", target: "< 24h", current: "Acompanhar" },
      { name: "Taxa de resposta", target: "> 30%", current: "Acompanhar" }
    ]
  },
  {
    category: "Qualificação",
    items: [
      { name: "MQL → SQL", target: "> 40%", current: "Acompanhar" },
      { name: "CVR no checkout", target: "3-7%", current: "Meta principal" },
      { name: "Tempo médio conversão", target: "< 14 dias", current: "Acompanhar" }
    ]
  }
];

const mqlCriteria = [
  "≥ 2 visitas à LP do curso",
  "≥ 1 clique em 'Programa/Instrutor'", 
  "≥ 1 vídeo assistido >50%",
  "Resposta positiva no WhatsApp",
  "Lead score ≥ 60 pontos"
];

export const KPIMetrics = () => {
  return (
    <div className="space-y-6">
      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi, index) => {
          const IconComponent = kpi.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${kpi.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-2xl font-bold">{kpi.value}</p>
                    <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{kpi.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* MQL Criteria */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Critérios para Marketing Qualified Lead (MQL)
          </CardTitle>
          <CardDescription>
            Sinais de compra que indicam um lead qualificado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mqlCriteria.map((criteria, index) => (
              <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-sm">{criteria}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Metrics by Category */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {metrics.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{category.category}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{item.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {item.target}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{item.current}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Conversion Funnel */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5 text-primary" />
            Funil de Conversão Esperado
          </CardTitle>
          <CardDescription>
            Jornada típica do lead do e-book até a matrícula
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-primary/10 rounded-lg p-4 mb-2">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">E-book Downloads</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-warning/10 rounded-lg p-4 mb-2">
                  <p className="text-2xl font-bold text-warning">25-40%</p>
                  <p className="text-sm text-muted-foreground">Visitam LP Curso</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-lg p-4 mb-2">
                  <p className="text-2xl font-bold text-accent">10-20%</p>
                  <p className="text-sm text-muted-foreground">Tornam-se MQL</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-success/10 rounded-lg p-4 mb-2">
                  <p className="text-2xl font-bold text-success">3-7%</p>
                  <p className="text-sm text-muted-foreground">Convertem</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};