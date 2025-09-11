import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock, Target, TrendingUp, AlertTriangle, Users, Zap } from "lucide-react";

const emailData = [
  {
    day: "D1",
    subject: "Do aterramento ao projeto aprovado: o próximo passo",
    preheader: "Como levar as diretrizes do e-book para a microgeração, sem retrabalho.",
    type: "Ponte Técnica",
    objective: "Conectar o conteúdo do e-book com o curso completo",
    keyPoints: [
      "Parabéns pelo download do guia",
      "Diferença entre bom aterramento e projeto aprovado",
      "Integração: normas + dimensionamento + documentação",
      "Como o curso conecta tudo do arranjo à homologação"
    ],
    cta: "Conhecer o programa completo",
    icon: Target,
    color: "primary"
  },
  {
    day: "D3", 
    subject: "3 falhas que custam caro na microgeração (e como evitar)",
    preheader: "Checklist prático: antes, durante e depois da obra.",
    type: "Erros Caros",
    objective: "Mostrar problemas reais e como o curso resolve",
    keyPoints: [
      "SPDA e equipotencialização ignorados → ruído na análise",
      "Documentação inconsistente → retrabalho",
      "Comissionamento sem critérios → não conformidade",
      "Checklist prático para evitar cada erro"
    ],
    cta: "Ver como o curso resolve cada ponto",
    icon: AlertTriangle,
    color: "warning"
  },
  {
    day: "D6",
    subject: "Como engenheiros encurtam a aprovação na concessionária", 
    preheader: "Processo, templates e suporte para quem projeta microgeração.",
    type: "ROI de Carreira",
    objective: "Mostrar benefícios profissionais e processo otimizado",
    keyPoints: [
      "Prova social: alunos + número de projetos aprovados",
      "Processo em 4 passos: fatura → dimensionamento → documentação → homologação",
      "Templates e ferramentas que aceleram aprovação",
      "Diferencial competitivo no mercado"
    ],
    cta: "Quero acelerar minha próxima aprovação",
    icon: TrendingUp,
    color: "success"
  },
  {
    day: "D8",
    subject: "[Exclusivo para quem baixou o guia] bônus de aplicação prática",
    preheader: "Planilhas + checklist de homologação liberados na matrícula.",
    type: "Oferta + Bônus",
    objective: "Apresentar oferta com bônus exclusivos",
    keyPoints: [
      "Bônus exclusivos para quem veio do e-book",
      "Planilha de dimensionamento inicial",
      "Template de memorial técnico",
      "Checklist de comissionamento editável"
    ],
    cta: "Garantir matrícula com bônus",
    icon: Zap,
    color: "secondary"
  },
  {
    day: "D10",
    subject: "Sem tempo? Veja como estudar e aplicar em 7 dias",
    preheader: "Acesso 12 meses + suporte + cronograma sugerido.",
    type: "Objeções - Tempo",
    objective: "Resolver objeção de falta de tempo",
    keyPoints: [
      "Cronograma sugerido de 7 dias",
      "Acesso por 12 meses completos",
      "Suporte direto durante o período",
      "Metodologia prática para aplicação imediata"
    ],
    cta: "Ver carga horária e cronograma prático",
    icon: Clock,
    color: "accent"
  },
  {
    day: "D12",
    subject: "O que os alunos estão entregando em campo",
    preheader: "Projetos aprovados e feedback de quem já está aplicando.",
    type: "Prova Social",
    objective: "Mostrar resultados reais de alunos",
    keyPoints: [
      "Cases reais de projetos aprovados",
      "Depoimentos de alunos em ação",
      "Números de aprovações nas concessionárias", 
      "Feedback sobre metodologia do curso"
    ],
    cta: "Ver resultados e se inscrever",
    icon: Users,
    color: "primary"
  },
  {
    day: "D14",
    subject: "Encerra hoje: bônus exclusivos do e-book",
    preheader: "Após hoje, os bônus de aplicação saem da oferta.",
    type: "Última Chamada",
    objective: "Criar urgência real para conversão",
    keyPoints: [
      "Último dia para bônus exclusivos",
      "Bônus de aplicação prática únicos",
      "Condições especiais apenas hoje",
      "Oportunidade limitada"
    ],
    cta: "Garantir sua vaga agora",
    icon: Zap,
    color: "destructive"
  }
];

const getColorClasses = (color: string) => {
  const colors = {
    primary: "border-primary/20 bg-primary/5 text-primary",
    warning: "border-warning/20 bg-warning/5 text-warning", 
    success: "border-success/20 bg-success/5 text-success",
    secondary: "border-secondary/20 bg-secondary/5 text-secondary",
    accent: "border-accent/20 bg-accent/5 text-accent",
    destructive: "border-destructive/20 bg-destructive/5 text-destructive"
  };
  return colors[color as keyof typeof colors] || colors.primary;
};

export const EmailSequence = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-primary" />
            Sequência de E-mails - 7 Envios em 14 Dias
          </CardTitle>
          <CardDescription>
            Estratégia completa de nurturing por e-mail com copy pronto para uso
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Email Cards */}
      <div className="space-y-4">
        {emailData.map((email, index) => {
          const IconComponent = email.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={getColorClasses(email.color)}>
                        {email.day}
                      </Badge>
                      <Badge variant="outline">
                        {email.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mb-2">
                      {email.subject}
                    </CardTitle>
                    <CardDescription className="text-sm italic">
                      Preheader: "{email.preheader}"
                    </CardDescription>
                  </div>
                  <div className={`p-3 rounded-lg ${getColorClasses(email.color).replace('text-', 'bg-').replace('/5', '/10')}`}>
                    <IconComponent className={`h-5 w-5 ${getColorClasses(email.color).split(' ')[2]}`} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-sm text-muted-foreground mb-2">
                      Objetivo: {email.objective}
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-sm mb-2">Pontos principais:</p>
                    <ul className="space-y-1.5">
                      {email.keyPoints.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Call to Action:</span>
                      <Badge variant="secondary" className="bg-gradient-solar text-white">
                        {email.cta}
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Link padrão */}
      <Card className="bg-muted/50">
        <CardContent className="p-6">
          <div className="text-center">
            <p className="font-medium mb-2">Link padrão para todos os CTAs:</p>
            <code className="bg-background px-4 py-2 rounded-md text-sm">
              https://cursos.canalsolar.com.br/curso/curso-de-projeto-de-microgeracao-de-energia-solar-fotovoltaica/
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};