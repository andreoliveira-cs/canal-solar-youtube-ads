import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, GitBranch, Clock, CheckCircle, Phone, Bell, Target, Users } from "lucide-react";

const automationFlow = [
  {
    step: "1",
    trigger: "Tag ebook_aterramento",
    action: "Entrada no fluxo",
    description: "Lead baixou o e-book de aterramento",
    icon: Target,
    color: "primary"
  },
  {
    step: "2", 
    trigger: "Entrada confirmada",
    action: "Enviar Email 1",
    description: "Ponte técnica automática",
    icon: CheckCircle,
    color: "success"
  },
  {
    step: "3",
    trigger: "Espera: 1 dia", 
    action: "Verificar clique LP",
    description: "Condição: clicou na LP do curso?",
    icon: GitBranch,
    color: "warning"
  },
  {
    step: "4a",
    trigger: "SIM: Clicou LP",
    action: "+15 pontos + Email 2 (curto)",
    description: "Lead engajado - versão otimizada",
    icon: CheckCircle,
    color: "success"
  },
  {
    step: "4b", 
    trigger: "NÃO: Não clicou",
    action: "Email 2 (padrão)",
    description: "Versão completa para re-engajar",
    icon: Clock,
    color: "muted"
  },
  {
    step: "5",
    trigger: "Espera: 1 dia",
    action: "Disparar WhatsApp 1",
    description: "Via integração RD + WhatsApp",
    icon: Bell,
    color: "accent"
  },
  {
    step: "6",
    trigger: "Espera: 1 dia", 
    action: "Enviar Email 3",
    description: "ROI de carreira",
    icon: CheckCircle,
    color: "primary"
  },
  {
    step: "7",
    trigger: "Verificar MQL",
    action: "≥2 visitas LP OU vídeo ≥50%?",
    description: "Condições para qualificação",
    icon: GitBranch,
    color: "warning"
  },
  {
    step: "8a",
    trigger: "SIM: É MQL",
    action: "Marcar MQL + criar tarefa CRM",
    description: "Notificar vendedor + ligar em 1h",
    icon: Phone,
    color: "destructive"
  },
  {
    step: "8b",
    trigger: "NÃO: Não é MQL",
    action: "Seguir com Email 4",
    description: "Continuar nurturing automático",
    icon: Clock,
    color: "muted"
  },
  {
    step: "9",
    trigger: "D10-D14",
    action: "Emails 5-7 + WhatsApp 3", 
    description: "Sequência final + encerramento",
    icon: Clock,
    color: "secondary"
  },
  {
    step: "10",
    trigger: "Matrícula realizada",
    action: "Sair do fluxo",
    description: "Entrar no onboarding do curso",
    icon: CheckCircle,
    color: "success"
  }
];

const integrations = [
  {
    tool: "RD Station",
    function: "Automação principal + scoring",
    features: ["Fluxos de e-mail", "Lead scoring", "Tags e segmentação", "Relatórios de conversão"]
  },
  {
    tool: "WhatsApp Business API", 
    function: "Mensagens automáticas",
    features: ["Integração via Zapier/RD", "Mensagens personalizadas", "Horário comercial", "Controle de frequência"]
  },
  {
    tool: "CRM/Pipedrive",
    function: "Gestão de vendas MQL",
    features: ["Tarefas automáticas", "Notificações vendedor", "Histórico completo", "Follow-up estruturado"]
  },
  {
    tool: "Meta/Google Ads",
    function: "Retargeting coordenado", 
    features: ["Audiências sincronizadas", "Exclusão de convertidos", "Budget otimizado", "Reporting unificado"]
  }
];

const salesPlaybook = [
  {
    stage: "1ª Ligação (≤4 min)",
    script: "Vi que você baixou o guia e se interessou pelo curso de microgeração. Hoje você já projeta para clientes residenciais/comerciais?",
    objective: "Confirmar interesse e qualificar situação atual"
  },
  {
    stage: "Qualificação",
    script: "Qual etapa te prende mais: dimensionamento, documentação ou aprovação?", 
    objective: "Identificar dor específica para personalizar abordagem"
  },
  {
    stage: "Apresentação",
    script: "Posso te mostrar como o curso resolve exatamente essa etapa e te enviar um cronograma de estudo de 7 dias?",
    objective: "Conectar solução à dor identificada"
  },
  {
    stage: "Encaminhamento",
    script: "Vou enviar link da LP + módulo recomendado + bônus exclusivos",
    objective: "Facilitar decisão com material personalizado"
  }
];

export const Automation = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5 text-primary" />
            Automação Completa - RD Station + Integrações
          </CardTitle>
          <CardDescription>
            Fluxo automatizado do e-book à conversão com handoff para vendas
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Automation Flow */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-accent" />
            Fluxo Principal: "Trilha e-book → Curso Microgeração"
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {automationFlow.map((step, index) => {
              const IconComponent = step.icon;
              const isDecision = step.trigger.includes("?");
              
              return (
                <div key={index} className="relative">
                  {index < automationFlow.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gradient-energy opacity-30"></div>
                  )}
                  
                  <div className="flex items-start gap-4">
                    <div className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full ${
                      isDecision ? 'bg-warning/20 border-2 border-warning' : `bg-${step.color}/20 border-2 border-${step.color}`
                    }`}>
                      <IconComponent className={`h-6 w-6 ${isDecision ? 'text-warning' : `text-${step.color}`}`} />
                    </div>
                    
                    <Card className="flex-1 shadow-sm">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Badge className={`bg-${step.color}/10 text-${step.color} border-${step.color}/20`}>
                                Passo {step.step}
                              </Badge>
                              {isDecision && (
                                <Badge className="bg-warning/10 text-warning border-warning/20">
                                  Decisão
                                </Badge>
                              )}
                            </div>
                            <p className="font-medium text-sm">{step.trigger}</p>
                          </div>
                        </div>
                        <p className="text-sm font-medium mb-1">{step.action}</p>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Integrations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-secondary" />
            Integrações Necessárias
          </CardTitle>
          <CardDescription>
            Ferramentas e suas funcionalidades no fluxo completo
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {integrations.map((integration, index) => (
              <Card key={index} className="bg-muted/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Settings className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{integration.tool}</p>
                      <p className="text-xs text-muted-foreground">{integration.function}</p>
                    </div>
                  </div>
                  <ul className="space-y-1">
                    {integration.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-xs">
                        <CheckCircle className="h-3 w-3 text-success flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sales Playbook */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-destructive" />
            Playbook Rápido de Vendas (MQL)
          </CardTitle>
          <CardDescription>
            Roteiro estruturado para primeira abordagem quando lead vira MQL
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {salesPlaybook.map((stage, index) => (
              <Card key={index} className="bg-destructive/5 border-destructive/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-destructive/10 p-2 rounded-lg">
                      <Users className="h-4 w-4 text-destructive" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm mb-2">{stage.stage}</p>
                      <div className="bg-background p-3 rounded-lg mb-2">
                        <p className="text-sm italic">"{stage.script}"</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          Objetivo: {stage.objective}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};