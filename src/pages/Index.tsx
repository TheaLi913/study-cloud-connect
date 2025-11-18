import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, GraduationCap, Users, Award, TrendingUp, CheckCircle2, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";
import wechatQR from "@/assets/wechat-qr.png";

const Index = () => {
  const [qrDialogOpen, setQrDialogOpen] = useState(false);
  const services = [
    {
      icon: BookOpen,
      title: "课程辅导",
      description: "专业导师1v1辅导，覆盖各学科核心课程",
      features: ["数学/统计", "编程/CS", "商科/金融", "工程/物理"]
    },
    {
      icon: GraduationCap,
      title: "学术写作",
      description: "论文指导与润色，提升学术写作能力",
      features: ["Essay写作", "Research Paper", "毕业论文", "文献综述"]
    },
    {
      icon: Users,
      title: "考试突击",
      description: "考前冲刺辅导，真题讲解与答疑",
      features: ["期中期末", "标准化考试", "模拟测试", "重点串讲"]
    },
    {
      icon: Award,
      title: "作业辅导",
      description: "日常作业答疑，培养解题思路",
      features: ["作业讲解", "习题指导", "项目辅助", "24h答疑"]
    }
  ];

  const stats = [
    { number: "10000+", label: "服务学生" },
    { number: "500+", label: "专业导师" },
    { number: "98%", label: "满意度" },
    { number: "50+", label: "覆盖院校" }
  ];

  const features = [
    "100%北美名校导师团队",
    "7x24小时在线答疑服务",
    "个性化定制学习方案",
    "严格保护隐私与安全",
    "课后反馈与学习报告",
    "支持多种支付方式"
  ];

  const tutors = [
    {
      name: "Dr. Zhang",
      title: "数学/统计导师",
      education: "MIT 博士",
      experience: "8年教学经验",
      specialty: "高等数学、统计学、数据分析",
      description: "擅长将复杂的数学概念简化，帮助学生建立扎实的理论基础"
    },
    {
      name: "Prof. Li",
      title: "计算机科学导师",
      education: "Stanford 硕士",
      experience: "6年教学经验",
      specialty: "算法、数据结构、机器学习",
      description: "曾在硅谷科技公司工作，理论与实践相结合的教学方式"
    },
    {
      name: "Dr. Wang",
      title: "商科/金融导师",
      education: "Harvard MBA",
      experience: "10年教学经验",
      specialty: "金融学、会计学、商业战略",
      description: "资深金融从业者，深入浅出讲解商业案例与金融理论"
    },
    {
      name: "Prof. Chen",
      title: "工程/物理导师",
      education: "Caltech 博士",
      experience: "7年教学经验",
      specialty: "工程力学、热力学、电磁学",
      description: "注重培养学生的工程思维和问题解决能力"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5 group cursor-pointer">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-md group-hover:shadow-lg transition-all">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                留学云伴
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#services" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">服务项目</a>
              <a href="#features" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">平台优势</a>
              <a href="#tutors" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">导师团队</a>
              <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">关于我们</a>
              <Button 
                onClick={() => setQrDialogOpen(true)}
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-md transition-all"
              >
                <MessageCircle className="h-4 w-4 mr-1.5" />
                立即咨询
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/8 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/8 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-5">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  你的留学路上
                  <br />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    最可靠的云伴侣
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  专业导师团队 · 7x24小时服务 · 覆盖全学科 · 助力学业成功
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button 
                  size="lg" 
                  onClick={() => setQrDialogOpen(true)}
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all px-8 shadow-md"
                >
                  免费咨询
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 sm:gap-8 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group cursor-default">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform">{stat.number}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200 mt-8 lg:mt-0">
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-2xl blur-2xl opacity-60" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/40 hover:shadow-2xl transition-all duration-500">
                <img 
                  src={heroImage} 
                  alt="留学生学习场景" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 md:py-24 bg-muted/20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">核心服务</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              一站式留学生学业辅导解决方案
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/50 backdrop-blur-sm bg-card/50 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-5 sm:p-6 space-y-4 relative">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-md">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                  <ul className="space-y-2.5 pt-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-sm group/item">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 group-hover/item:scale-105 transition-transform" />
                        <span className="text-foreground/80 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">为什么选择我们</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              专业团队 · 贴心服务 · 值得信赖
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors flex-shrink-0">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <span className="text-sm sm:text-base font-medium group-hover:text-primary transition-colors">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutors Section */}
      <section id="tutors" className="py-16 sm:py-20 md:py-24 bg-muted/20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">导师团队</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              北美名校背景 · 丰富教学经验 · 专业学科覆盖
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {tutors.map((tutor, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/50 backdrop-blur-sm bg-card/50 overflow-hidden"
              >
                <CardContent className="p-5 sm:p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="h-20 w-20 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                      <GraduationCap className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{tutor.name}</h3>
                      <p className="text-sm text-primary font-medium">{tutor.title}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Award className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{tutor.education}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{tutor.experience}</span>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-border/50">
                    <p className="text-xs font-medium text-muted-foreground mb-1">专业领域：</p>
                    <p className="text-xs text-foreground/70 leading-relaxed">{tutor.specialty}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">{tutor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMTQtMi42ODYtNi02LTZzLTYgMi42ODYtNiA2IDIuNjg2IDYgNiA2IDYtMi42ODYgNi02ek0wIDB2NjBoNjBWMEgwem0zMCAzNGMtOS45NDEgMC0xOC03LjA1OS0xOC0xN0gwdjQyaDYwVjE3SDQ4Yy45NDEgOS45NDEtOC4wNTkgMTctMTggMTd6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg">开启你的学业提升之旅</h2>
          <p className="text-base sm:text-lg md:text-xl opacity-95 max-w-2xl mx-auto leading-relaxed">
            立即联系我们，获取专属学习方案和免费试课机会
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2 sm:pt-4">
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => setQrDialogOpen(true)}
              className="text-base sm:text-lg px-8 sm:px-10 bg-background text-foreground hover:bg-background/90 transition-all shadow-lg"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              在线咨询
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="py-10 sm:py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-7 w-7 text-primary" />
                <span className="text-lg font-bold">留学云伴</span>
              </div>
              <p className="text-sm text-muted-foreground">
                专注留学生学业辅导，助力每一位学子实现学业梦想
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-sm">快速链接</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">服务项目</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">平台优势</a></li>
                <li><a href="#tutors" className="hover:text-primary transition-colors">导师团队</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">成功案例</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-sm">联系我们</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>工作时间: 7x24小时</li>
                <li>邮箱: contact@liuxueyunban.com</li>
                <li>微信: liuxueyunban</li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>2025 留学云伴. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* QR Code Dialog */}
      <Dialog open={qrDialogOpen} onOpenChange={setQrDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogTitle className="text-center text-2xl font-bold">扫码咨询</DialogTitle>
          <div className="flex flex-col items-center gap-4 py-4">
            <img 
              src={wechatQR} 
              alt="微信咨询二维码" 
              className="w-64 h-64 object-contain"
            />
            <p className="text-center text-muted-foreground">
              扫描二维码添加微信，即刻获得专业咨询服务
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
