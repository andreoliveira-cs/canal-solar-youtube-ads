import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Mail, MessageCircle, Video, Target, Megaphone } from "lucide-react";

const timelineData = [
  {
    day: "D0",
    title: "Imediato",
    description: "Obrigado + próximo passo",
    actions: [
      "Email automático de agradecimento",
      "Página de obrigado com CTA para LP do curso",
      "Download do checklist de homologação"
    ],
    type: "immediate",
    icon: Target
  },
  {
    day: "D1",
    title: "Email #1",
    description: "Do aterramento à homologação sem retrabalho",
    actions: [
      "Ponte técnica conectando e-book ao curso",
      "Link para LP do curso",
      "Assunto: 'Do aterramento ao projeto aprovado: o próximo passo'"
    ],
    type: "email",
    icon: Mail
  },
  {
    day: "D2",
    title: "WhatsApp #1",
    description: "Pergunta de diagnóstico amigável",
    actions: [
      "Pergunta: projeta microgeração hoje?",
      "Principal dificuldade identificada",
      "Qualificação inicial do lead"
    ],
    type: "whatsapp",
    icon: MessageCircle
  },
  {
    day: "D3",
    title: "Email #2",
    description: "3 falhas de microgeração que custam caro",
    actions: [
      "Case de erro caro",
      "Como o aterramento resolve",
      "Checklist prático"
    ],
    type: "email",
    icon: Mail
  },
  {
    day: "D4",
    title: "Retargeting",
    description: "Início da mídia paga",
    actions: [
      "Meta + Google Display/YouTube",
      "Audiência: visitantes LP/agradecimento",
      "Criativos sobre erros caros"
    ],
    type: "media",
    icon: Megaphone
  },
  {
    day: "D5",
    title: "Mini-aula",
    description: "Microgeração na prática (10-15 min)",
    actions: [
      "Vídeo gravado: da fatura ao comissionamento",
      "Iframe incorporado na LP",
      "Conteúdo de valor prático"
    ],
    type: "video",
    icon: Video
  },
  {
    day: "D6",
    title: "Email #3",
    description: "ROI de carreira",
    actions: [
      "Como acelerar aprovação nas concessionárias",
      "Prova social de alunos",
      "Processo em 4 passos"
    ],
    type: "email",
    icon: Mail
  },
  {
    day: "D7",
    title: "Live/Q&A",
    description: "Aula Magna com Bruno (30-40 min)",
    actions: [
      "Convite via email e WhatsApp",
      "Bônus para quem ficar até o final",
      "Interação ao vivo"
    ],
    type: "video",
    icon: Video
  },
  {
    day: "D8",
    title: "Email #4",
    description: "Apresentação do curso + bônus exclusivos",
    actions: [
      "Oferta direta do curso",
      "Bônus exclusivos para quem baixou e-book",
      "Planilhas + checklist liberados"
    ],
    type: "email",
    icon: Mail
  },
  {
    day: "D9-D11",
    title: "Sequência de objeções",
    description: "Tratamento de objeções principais",
    actions: [
      "Email sobre tempo de estudo",
      "Email sobre preço e ROI",
      "Email sobre nível técnico e suporte"
    ],
    type: "email",
    icon: Mail
  },
  {
    day: "D12",
    title: "Prova social",
    description: "Cases de alunos e aprovações",
    actions: [
      "Depoimentos de alunos",
      "Prints de aprovações na concessionária",
      "Resultados práticos"
    ],
    type: "social-proof",
    icon: Target
  },
  {
    day: "D13-D14",
    title: "Escassez real",
    description: "Encerramento de condições",
    actions: [
      "Bônus expira em 48h",
      "Vagas limitadas da turma",
      "Última chamada para condições especiais"
    ],
    type: "urgency",
    icon: Clock
  }
];

const getTypeColor = (type: string) => {
  const colors = {
    immediate: "bg-success",
    email: "bg-primary",
    whatsapp: "bg-accent",
    media: "bg-secondary",
    video: "bg-warning",
    "social-proof": "bg-primary/80",
    urgency: "bg-destructive"
  };
  return colors[type as keyof typeof colors] || "bg-muted";
};

export const TimelineView = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Linha do Tempo - 14 Dias de Nurturing
          </CardTitle>
          <CardDescription>
            Jornada completa do lead desde o download do e-book até a conversão no curso
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-energy"></div>
        
        <div className="space-y-6">
          {timelineData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="relative flex items-start gap-6">
                {/* Timeline dot */}
                <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full ${getTypeColor(item.type)} shadow-lg`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                
                {/* Content card */}
                <Card className="flex-1 shadow-md hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          {item.day} - {item.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {item.description}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className={`${getTypeColor(item.type)} text-white border-0`}>
                        {item.type.replace("-", " ")}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};