import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { TimelineView } from "./TimelineView";
import { KPIMetrics } from "./KPIMetrics";
import { EmailSequence } from "./EmailSequence";
import { WhatsAppFlow } from "./WhatsAppFlow";
import { PaidMedia } from "./PaidMedia";
import { Automation } from "./Automation";
import { Zap, Target, Mail, MessageCircle, TrendingUp, Settings } from "lucide-react";

const MarketingDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-sky">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <div className="bg-gradient-solar rounded-xl p-8 text-white shadow-solar">
            <h1 className="text-4xl font-bold mb-2">
              Estratégia de Marketing - Microgeração Solar
            </h1>
            <p className="text-lg opacity-90">
              Workflow organizado para conversão de leads do e-book para o curso
            </p>
            <div className="mt-4 flex gap-4">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Meta: 3-7% conversão
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                14 dias de nurturing
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                Multi-canal: Email + WhatsApp + Mídia Paga
              </Badge>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-6">
            <TabsTrigger value="timeline" className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="kpis" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              KPIs
            </TabsTrigger>
            <TabsTrigger value="emails" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              E-mails
            </TabsTrigger>
            <TabsTrigger value="whatsapp" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </TabsTrigger>
            <TabsTrigger value="media" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Mídia Paga
            </TabsTrigger>
            <TabsTrigger value="automation" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Automação
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline">
            <TimelineView />
          </TabsContent>

          <TabsContent value="kpis">
            <KPIMetrics />
          </TabsContent>

          <TabsContent value="emails">
            <EmailSequence />
          </TabsContent>

          <TabsContent value="whatsapp">
            <WhatsAppFlow />
          </TabsContent>

          <TabsContent value="media">
            <PaidMedia />
          </TabsContent>

          <TabsContent value="automation">
            <Automation />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MarketingDashboard;