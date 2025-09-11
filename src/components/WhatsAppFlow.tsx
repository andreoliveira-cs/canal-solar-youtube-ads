import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Clock, Users, Video, Zap, Target } from "lucide-react";

const whatsappMessages = [
  {
    day: "D2",
    type: "Diagnóstico Amigável",
    message: "Oi, {nome}, aqui é do Canal Solar 👋 Vi que você baixou o guia de aterramento. Hoje você já projeta microgeração? Qual seu maior desafio: (a) aprovação na concessionária, (b) documentação, (c) dimensionamento?",
    objective: "Qualificar o lead e identificar dor principal",
    expectedResponse: "Resposta sobre situação atual e principais dificuldades",
    followUp: "Personalizar próximas abordagens baseado na resposta",
    icon: Target,
    color: "accent"
  },
  {
    day: "D7",
    type: "Convite para Live",
    message: "{nome}, vamos fazer uma mini-aula 'Microgeração na prática' (30 min). É direto ao ponto, com exemplos reais. Posso te mandar o link?",
    objective: "Aumentar engajamento com conteúdo ao vivo",
    expectedResponse: "Confirmação de interesse na aula",
    followUp: "Enviar link da live e lembretes próximos ao horário",
    icon: Video,
    color: "warning"
  },
  {
    day: "D14",
    type: "Encerramento de Bônus",
    message: "Último lembrete, {nome}: os bônus do e-book (planilhas + checklist) ficam disponíveis só até hoje para quem se matricular. Quer o link agora?",
    objective: "Criar urgência real para conversão final",
    expectedResponse: "Solicitação do link ou questionamentos finais",
    followUp: "Enviar link direto do checkout com bônus inclusos",
    icon: Zap,
    color: "destructive"
  }
];

const automationRules = [
  {
    trigger: "Download do e-book",
    timing: "48h após download",
    condition: "Não visitou LP do curso",
    action: "Enviar mensagem D2"
  },
  {
    trigger: "Visita à LP curso",
    timing: "24h após visita",
    condition: "Não se inscreveu na live",
    action: "Convite para mini-aula"
  },
  {
    trigger: "MQL qualificado",
    timing: "Imediato",
    condition: "Score ≥ 60 pontos",
    action: "Notificar vendedor + ligar em 1h"
  },
  {
    trigger: "Fim do período",
    timing: "D14 manhã",
    condition: "Não converteu",
    action: "Mensagem de encerramento"
  }
];

const bestPractices = [
  {
    title: "Personalização",
    description: "Sempre usar o nome do lead e referenciar ações específicas (download, visita, etc.)",
    icon: Users
  },
  {
    title: "Timing",
    description: "Respeitar horário comercial (8h-18h) e evitar fins de semana",
    icon: Clock
  },
  {
    title: "Integração CRM",
    description: "Todas as respostas devem ser registradas no RD Station com tags apropriadas",
    icon: Target
  },
  {
    title: "Qualificação",
    description: "Usar respostas para pontuar lead score e acionar time comercial quando necessário",
    icon: Zap
  }
];

export const WhatsAppFlow = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-accent" />
            Fluxo WhatsApp - 3 Mensagens Estratégicas
          </CardTitle>
          <CardDescription>
            Mensagens personalizadas via RD Station + acompanhamento do time comercial
          </CardDescription>
        </CardHeader>
      </Card>

      {/* WhatsApp Messages */}
      <div className="space-y-4">
        {whatsappMessages.map((msg, index) => {
          const IconComponent = msg.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <Badge className={`border-${msg.color}/20 bg-${msg.color}/10 text-${msg.color}`}>
                        {msg.day}
                      </Badge>
                      <Badge variant="outline">
                        {msg.type}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">
                      Mensagem {index + 1}
                    </CardTitle>
                  </div>
                  <div className={`p-3 rounded-lg bg-${msg.color}/10`}>
                    <IconComponent className={`h-5 w-5 text-${msg.color}`} />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Message Text */}
                <div className="bg-accent/5 p-4 rounded-lg border-l-4 border-accent">
                  <p className="text-sm font-medium mb-2">Mensagem:</p>
                  <p className="text-sm italic">"{msg.message}"</p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">OBJETIVO</p>
                    <p className="text-sm">{msg.objective}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">RESPOSTA ESPERADA</p>
                    <p className="text-sm">{msg.expectedResponse}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs font-medium text-muted-foreground mb-1">FOLLOW-UP</p>
                    <p className="text-sm">{msg.followUp}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Automation Rules */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Regras de Automação (RD Station)
          </CardTitle>
          <CardDescription>
            Triggers automáticos baseados no comportamento do lead
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {automationRules.map((rule, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Zap className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-4 gap-2 text-sm">
                  <div>
                    <span className="font-medium text-primary">Gatilho:</span>
                    <p>{rule.trigger}</p>
                  </div>
                  <div>
                    <span className="font-medium text-warning">Timing:</span>
                    <p>{rule.timing}</p>
                  </div>
                  <div>
                    <span className="font-medium text-accent">Condição:</span>
                    <p>{rule.condition}</p>
                  </div>
                  <div>
                    <span className="font-medium text-success">Ação:</span>
                    <p>{rule.action}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Best Practices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-success" />
            Melhores Práticas
          </CardTitle>
          <CardDescription>
            Diretrizes para maximizar efetividade do WhatsApp
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {bestPractices.map((practice, index) => {
              const IconComponent = practice.icon;
              return (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-success/5 border border-success/20">
                  <div className="bg-success/10 p-2 rounded-lg">
                    <IconComponent className="h-4 w-4 text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">{practice.title}</p>
                    <p className="text-sm text-muted-foreground">{practice.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};