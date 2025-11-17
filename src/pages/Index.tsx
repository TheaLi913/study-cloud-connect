import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Award, TrendingUp, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";
import wechatQR from "@/assets/wechat-qr.png";

const Index = () => {
  const services = [
    {
      icon: BookOpen,
      title: "课程视频课",
      description: "按院校分类的专业课程，付费录播课与免费体验课",
      features: [
        "英国：南安普顿、格拉斯哥、兰卡斯特",
        "澳洲：悉尼、墨尔本、昆士兰",
        "澳洲：莫纳什、阿德莱德",
        "付费录播课 + 免费体验课"
      ]
    },
    {
      icon: GraduationCap,
      title: "留学申诉",
      description: "专业申诉服务，协助处理学术申诉相关事宜",
      features: ["成绩申诉", "学术不端申诉", "签证申诉", "专业指导"]
    },
    {
      icon: Award,
      title: "毕业论文",
      description: "毕业论文全程指导，从选题到答辩全方位支持",
      features: ["选题指导", "论文写作", "数据分析", "答辩准备"]
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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50 shadow-lg">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-lg group-hover:shadow-xl transition-all">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                留学云伴
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-foreground/80 hover:text-primary font-medium transition-all hover:scale-105">服务项目</a>
              <a href="#features" className="text-foreground/80 hover:text-primary font-medium transition-all hover:scale-105">平台优势</a>
              <a href="#about" className="text-foreground/80 hover:text-primary font-medium transition-all hover:scale-105">关于我们</a>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:scale-105 transition-all shadow-md">
                <MessageCircle className="h-4 w-4 mr-2" />
                立即咨询
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5 -z-10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10 animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.8]">
                  你的留学路上
                  <br />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    最可靠的云伴侣
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                  专业导师团队 · 7x24小时服务 · 覆盖全学科 · 助力学业成功
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:shadow-xl hover:scale-105 transition-all text-lg px-10 shadow-lg">
                  免费咨询
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-10 border-2 border-primary/50 hover:bg-primary/10 hover:border-primary hover:scale-105 transition-all">
                  <Phone className="h-5 w-5 mr-2" />
                  预约试课
                </Button>
              </div>
              <div className="flex flex-wrap gap-10 pt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group cursor-default">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-110 transition-transform">{stat.number}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-border/50 hover:shadow-[0_20px_60px_-15px_rgba(0,119,255,0.3)] transition-all duration-500">
                <img 
                  src={heroImage} 
                  alt="留学生学习场景" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-muted/20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background -z-10" />
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">核心服务</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              一站式留学生学业辅导解决方案
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-border/50 hover:border-primary/50 backdrop-blur-sm bg-card/50 overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-7 space-y-5 relative">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <ul className="space-y-3 pt-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm group/item">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className="group-hover/item:text-foreground text-foreground/80 transition-colors">{feature}</span>
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
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">为什么选择我们</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              专业团队 · 贴心服务 · 值得信赖
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 group-hover:from-primary/20 group-hover:to-secondary/20 transition-colors">
                  <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                </div>
                <span className="font-medium group-hover:text-primary transition-colors">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WeChat Contact Section */}
      <section className="py-24 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              微信咨询
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              扫描二维码添加微信，获取专业咨询服务
            </p>
          </div>
          <div className="flex justify-center">
            <Card className="inline-block p-8 border-2 border-border/50 bg-card/50 backdrop-blur-sm shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-105">
              <CardContent className="p-0">
                <div className="space-y-4 text-center">
                  <div className="p-4 bg-background rounded-xl inline-block">
                    <img 
                      src={wechatQR} 
                      alt="微信二维码" 
                      className="w-64 h-64 object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-foreground">
                      扫码添加客服微信
                    </p>
                    <p className="text-sm text-muted-foreground">
                      7×24小时在线服务
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary -z-10" />
        <div className="absolute inset-0 opacity-10 -z-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10 space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground drop-shadow-lg">
            开启你的学业提升之旅
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            立即联系我们，获取专属学习方案和免费试课机会
          </p>
          <div className="flex flex-wrap gap-5 justify-center pt-4">
            <Button size="lg" variant="secondary" className="text-lg px-10 bg-background text-foreground hover:bg-background/90 hover:scale-105 transition-all shadow-xl">
              <MessageCircle className="h-5 w-5 mr-2" />
              在线咨询
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-10 border-2 border-background/80 text-primary-foreground hover:bg-background/20 hover:border-background hover:scale-105 transition-all backdrop-blur-sm">
              <Phone className="h-5 w-5 mr-2" />
              400-XXX-XXXX
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">留学云伴</span>
              </div>
              <p className="text-muted-foreground">
                专注留学生学业辅导，助力每一位学子实现学业梦想
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">快速链接</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#services" className="hover:text-primary transition-colors">服务项目</a></li>
                <li><a href="#features" className="hover:text-primary transition-colors">平台优势</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">导师团队</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">成功案例</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">联系我们</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>客服热线: 400-XXX-XXXX</li>
                <li>工作时间: 7x24小时</li>
                <li>邮箱: contact@liuxueyunban.com</li>
                <li>微信: liuxueyunban</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>© 2024 留学云伴. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
