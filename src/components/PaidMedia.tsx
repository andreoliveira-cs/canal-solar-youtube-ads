import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Target, Users, Eye, TrendingUp, AlertTriangle, CheckCircle, Gift } from "lucide-react";

const audiences = [
  {
    name: "Custom: ebook_aterramento",
    description: "Lista de quem baixou + visitantes da página de obrigado",
    size: "Base primária",
    priority: "Alta",
    color: "primary"
  },
  {
    name: "Engajados LP do curso",
    description: "Visitantes da landing page nos últimos 30/60/90 dias",
    size: "Segmentado",
    priority: "Alta", 
    color: "accent"
  },
  {
    name: "Lookalike compradores",
    description: "1-2% similar aos alunos que já compraram o curso",
    size: "Expansão",
    priority: "Média",
    color: "secondary"
  },
  {
    name: "YouTube viewers",
    description: "Quem assistiu a mini-aula ou conteúdos relacionados",
    size: "Engajados",
    priority: "Média",
    color: "warning"
  }
];

const creatives = [
  {
    angle: "Erro Caro",
    title: "3 falhas que atrasam sua homologação",
    format: "Vídeo 20-30s",
    cta: "Ver curso",
    description: "Mostrar problemas reais e consequências financeiras",
    icon: AlertTriangle,
    color: "destructive"
  },
  {
    angle: "Processo",
    title: "Da fatura à aprovação",
    format: "Carousel/Vídeo",
    cta: "Conhecer processo",
    description: "4 passos claros do método completo",
    icon: TrendingUp,
    color: "primary"
  },
  {
    angle: "Prova Social",
    title: "Depoimentos e aprovações",
    format: "UGC/Prints",
    cta: "Ver resultados",
    description: "Cases reais de alunos e projetos aprovados",
    icon: CheckCircle,
    color: "success"
  },
  {
    angle: "Bônus Exclusivo",
    title: "Planilhas + checklist na matrícula",
    format: "Estático/Vídeo",
    cta: "Garantir bônus",
    description: "Destaque para materiais extras únicos",
    icon: Gift,
    color: "secondary"
  }
];

const adCopies = [
  {
    platform: "Meta",
    copy: "Lançamento exclusivo para quem baixou o guia: planilhas + checklist na matrícula. Aprenda microgeração de ponta a ponta.",
    cta: "Saiba mais"
  },
  {
    platform: "Google",
    copy: "Evite retrabalho e atrasos: domine documentação, normas e comissionamento. Veja o programa.",
    cta: "Ver programa"
  }
];

const campaignStructure = [
  {
    campaign: "Retargeting - E-book Leads",
    objective: "Conversões",
    budget: "R$ 50-100/dia",
    duration: "D4-D14 (11 dias)",
    audiences: ["ebook_aterramento", "Engajados LP"]
  },
  {
    campaign: "Lookalike Expansion", 
    objective: "Tráfego/Conversões",
    budget: "R$ 30-50/dia",
    duration: "D7-D14 (8 dias)",
    audiences: ["Lookalike compradores"]
  },
  {
    campaign: "YouTube Remarketing",
    objective: "Awareness/Conversões", 
    budget: "R$ 20-40/dia",
    duration: "D5-D14 (10 dias)",
    audiences: ["YouTube viewers", "Vídeo engajados"]
  }
];

export const PaidMedia = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Megaphone className="h-5 w-5 text-secondary" />
            Mídia Paga - Retargeting Estratégico
          </CardTitle>
          <CardDescription>
            Campanhas Meta + Google Display/YouTube iniciando no D4
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Audiences */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Audiências Personalizadas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {audiences.map((audience, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <p className="font-medium text-sm mb-1">{audience.name}</p>
                      <p className="text-xs text-muted-foreground mb-2">{audience.description}</p>
                    </div>
                    <Badge className={`bg-${audience.color}/10 text-${audience.color} border-${audience.color}/20`}>
                      {audience.priority}
                    </Badge>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Tamanho:</span>
                    <span className="font-medium">{audience.size}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Creative Angles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-accent" />
            Ângulos Criativos
          </CardTitle>
          <CardDescription>
            4 abordagens principais para diferentes momentos da jornada
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {creatives.map((creative, index) => {
              const IconComponent = creative.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-${creative.color}/10`}>
                        <IconComponent className={`h-5 w-5 text-${creative.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className={`bg-${creative.color}/10 text-${creative.color} border-${creative.color}/20`}>
                            {creative.angle}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {creative.format}
                          </Badge>
                        </div>
                        <h4 className="font-medium mb-1">{creative.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{creative.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">CTA:</span>
                          <Badge variant="secondary" className="text-xs">
                            {creative.cta}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Ad Copies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-warning" />
            Copies dos Anúncios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {adCopies.map((ad, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-primary/10 text-primary">{ad.platform}</Badge>
                </div>
                <p className="text-sm mb-3 italic">"{ad.copy}"</p>
                <div className="flex justify-end">
                  <Badge variant="secondary" className="text-xs">
                    CTA: {ad.cta}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Campaign Structure */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-success" />
            Estrutura de Campanhas
          </CardTitle>
          <CardDescription>
            Organização por objetivo e audiência com orçamentos sugeridos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaignStructure.map((campaign, index) => (
              <Card key={index} className="bg-muted/30">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-medium mb-1">{campaign.campaign}</h4>
                      <Badge variant="outline" className="text-xs">
                        {campaign.objective}
                      </Badge>
                    </div>
                    <div className="text-right text-sm">
                      <p className="font-medium text-success">{campaign.budget}</p>
                      <p className="text-xs text-muted-foreground">{campaign.duration}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Audiências:</p>
                    <div className="flex flex-wrap gap-1">
                      {campaign.audiences.map((audience, audienceIndex) => (
                        <Badge key={audienceIndex} variant="secondary" className="text-xs">
                          {audience}
                        </Badge>
                      ))}
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