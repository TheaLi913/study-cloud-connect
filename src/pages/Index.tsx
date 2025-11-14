import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Users, Award, TrendingUp, CheckCircle2, MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-students.jpg";

const Index = () => {
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

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                留学云伴
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">服务项目</a>
              <a href="#features" className="text-foreground hover:text-primary transition-colors">平台优势</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">关于我们</a>
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                <MessageCircle className="h-4 w-4 mr-2" />
                立即咨询
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10 -z-10" />
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  你的留学路上
                  <br />
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    最可靠的云伴侣
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl">
                  专业导师团队 · 7x24小时服务 · 覆盖全学科 · 助力学业成功
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8">
                  免费咨询
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-primary hover:bg-primary/10">
                  <Phone className="h-5 w-5 mr-2" />
                  预约试课
                </Button>
              </div>
              <div className="flex flex-wrap gap-8 pt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="留学生学习场景" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">核心服务</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              一站式留学生学业辅导解决方案
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
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
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">为什么选择我们</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              专业团队 · 贴心服务 · 值得信赖
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-5 rounded-xl bg-card border-2 border-border hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">开启你的学业提升之旅</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            立即联系我们，获取专属学习方案和免费试课机会
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 bg-background text-foreground hover:bg-background/90">
              <MessageCircle className="h-5 w-5 mr-2" />
              在线咨询
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-background text-background hover:bg-background/10">
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
