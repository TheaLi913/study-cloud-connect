import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { BookOpen, GraduationCap, Users, Award, TrendingUp, CheckCircle2, MessageCircle } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-students.jpg";
import heroCollaboration from "@/assets/hero-collaboration.jpg";
import heroOnlineLearning from "@/assets/hero-online-learning.jpg";
import heroSuccess from "@/assets/hero-success.jpg";
import wechatQR from "@/assets/wechat-qr.png";
import tutorLynn from "@/assets/tutor-lynn.jpg";
import tutorDavid from "@/assets/tutor-david.jpg";
import tutorAnna from "@/assets/tutor-anna.jpg";
import tutorEthan from "@/assets/tutor-ethan.jpg";
import tutorMay from "@/assets/tutor-may.jpg";
import tutorJoyce from "@/assets/tutor-joyce.jpg";

const Index = () => {
  const [qrDialogOpen, setQrDialogOpen] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroImages = [
    heroImage,
    heroCollaboration,
    heroOnlineLearning,
    heroSuccess
  ];

  // Auto-play hero background
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToSlide = (index: number) => {
    setCurrentHeroSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToNextSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
  };
  const services = [
    {
      icon: BookOpen,
      title: "全科辅导",
      description: "课程辅导、考试突击、作业答疑一站式服务",
      features: ["1v1课程辅导", "考前冲刺突击", "作业讲解答疑", "24h在线支持"]
    },
    {
      icon: GraduationCap,
      title: "学术写作",
      description: "论文指导与润色，提升学术写作能力",
      features: ["Essay写作", "Research Paper写作", "硕博毕业论文", "期刊发表"]
    },
    {
      icon: Award,
      title: "学业申诉",
      description: "评估案件-制定策略-撰写文书-结果跟进",
      features: ["成绩申诉", "学术不端Appeal", "延期/撤课申请", "学业挽救"]
    }
  ];

  const stats = [
    { number: "10000+", label: "服务学生" },
    { number: "500+", label: "专业导师" },
    { number: "98%", label: "满意度" },
    { number: "50+", label: "覆盖院校" }
  ];

  const features = [
    "100%全球名校导师团队",
    "7x24小时在线答疑服务",
    "个性化定制学习方案",
    "严格保护隐私与安全",
    "课后反馈与学习报告",
    "支持多种支付方式"
  ];

  const tutors = [
    {
      name: "Lynn",
      title: "MBA 商学导师",
      education: "英国UCL大学",
      experience: "10年+教学经验",
      specialty: "商业管理、市场营销、战略规划",
      description: "曾在国际商学院任教，强调实践与案例分析，培养学生的问题解决和决策能力",
      avatar: tutorLynn
    },
    {
      name: "David",
      title: "博士 经济学导师",
      education: "美国福特汉姆大学",
      experience: "高等教育机构教授",
      specialty: "宏观经济学、国际经济学、全球经济趋势",
      description: "丰富的教学和研究经验，注重理论与实践相结合，鼓励学生进行批判性研究",
      avatar: tutorDavid
    },
    {
      name: "Anna",
      title: "硕士 会计学导师",
      education: "澳大利亚悉尼大学",
      experience: "多家会计师事务所工作经验",
      specialty: "会计学、财务管理、税务规划",
      description: "强调实际案例分析和会计实务操作，帮助学生掌握实际技能",
      avatar: tutorAnna
    },
    {
      name: "Ethan",
      title: "博士在读 数学导师",
      education: "美国纽约大学",
      experience: "10年+数学教学经验",
      specialty: "高等数学、统计学、数学分析",
      description: "注重逻辑思维和问题解决，以促进学生的数学素养",
      avatar: tutorEthan
    },
    {
      name: "May",
      title: "硕士 金融工程导师",
      education: "加拿大滑铁卢大学",
      experience: "曾从事量化分析工作",
      specialty: "金融工程、量化分析、算法交易",
      description: "注重数学建模和数据分析，培养学生的量化分析能力",
      avatar: tutorMay
    },
    {
      name: "Joyce",
      title: "博士在读 金融学导师",
      education: "英国伯明翰大学",
      experience: "曾在金融研究机构从事经济分析工作",
      specialty: "金融市场分析、投资管理、股票和债券市场",
      description: "强调实际案例分析和缝隙那管理，培养学生的投资决策能力",
      avatar: tutorJoyce
    }
  ];

  const testimonials = [
    {
      name: "张同学",
      school: "加州大学伯克利分校",
      major: "计算机科学",
      course: "数据结构与算法",
      rating: 5,
      improvement: "GPA从2.8提升至3.7",
      comment: "导师非常专业，耐心讲解复杂的算法问题。在导师的帮助下，我不仅顺利通过了期末考试，还对编程产生了更大的兴趣。强烈推荐！",
      date: "2025年1月"
    },
    {
      name: "李同学",
      school: "纽约大学",
      major: "金融学",
      course: "公司财务管理",
      rating: 5,
      improvement: "期末成绩从C+提升至A-",
      comment: "Lynn导师的案例分析方法让我豁然开朗，复杂的财务概念变得容易理解。课后的学习报告也帮我查漏补缺，非常贴心的服务！",
      date: "2024年12月"
    },
    {
      name: "王同学",
      school: "多伦多大学",
      major: "经济学",
      course: "计量经济学",
      rating: 5,
      improvement: "成功完成毕业论文",
      comment: "David教授在我的毕业论文指导上给予了巨大帮助，从选题到数据分析再到论文写作，每个环节都悉心指导。最终我的论文获得了优秀评价！",
      date: "2024年11月"
    },
    {
      name: "陈同学",
      school: "悉尼大学",
      major: "会计学",
      course: "高级财务会计",
      rating: 5,
      improvement: "考试成绩从62分提升至85分",
      comment: "Anna导师的实务经验非常丰富，将理论与实践完美结合。她的辅导让我对会计准则有了更深入的理解，考试时信心满满！",
      date: "2025年1月"
    },
    {
      name: "刘同学",
      school: "伦敦政治经济学院",
      major: "数学",
      course: "高等数学",
      rating: 5,
      improvement: "期中考试从不及格到82分",
      comment: "Ethan导师非常有耐心，把复杂的数学概念讲得通俗易懂。他不仅教我解题方法，更培养了我的数学思维。感谢导师让我重拾对数学的信心！",
      date: "2024年12月"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border/50 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2.5 group cursor-pointer">
              <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-secondary shadow-md group-hover:shadow-lg transition-all">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                留学云伴
              </span>
            </a>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <a href="#services" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">服务项目</a>
              <a href="#features" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">平台优势</a>
              <a href="#tutors" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">导师团队</a>
              <a href="#testimonials" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">学生评价</a>
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
      <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden min-h-[600px]">
        {/* Background Images with Fade Transition */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                currentHeroSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={image} 
                alt="" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/40" />
              <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/50 hover:bg-background/80 border border-border/50 flex items-center justify-center transition-all"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/50 hover:bg-background/80 border border-border/50 flex items-center justify-center transition-all"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentHeroSlide === index 
                  ? "bg-primary w-8" 
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left duration-700">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-5xl mx-auto">
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
              全球名校背景 · 丰富教学经验 · 专业学科覆盖
            </p>
          </div>
          <div className="max-w-6xl mx-auto px-8 sm:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {tutors.map((tutor, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card 
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50 hover:border-primary/50 backdrop-blur-sm bg-card/50 overflow-hidden h-full"
                    >
                      <CardContent className="p-5 sm:p-6 space-y-4">
                        <div className="space-y-2">
                          <div className="h-20 w-20 mx-auto rounded-full overflow-hidden shadow-lg group-hover:scale-105 transition-transform ring-2 ring-primary/20">
                            <img 
                              src={tutor.avatar} 
                              alt={`${tutor.name}导师头像`}
                              className="w-full h-full object-cover"
                            />
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
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 md:py-24 bg-muted/30 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">学生评价</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              真实反馈，见证成长
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 bg-card/50 backdrop-blur-sm group">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{testimonial.name}</h3>
                            <p className="text-sm text-muted-foreground">{testimonial.school}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.major}</p>
                          </div>
                          <div className="flex gap-0.5">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-primary" viewBox="0 0 20 20">
                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                            {testimonial.course}
                          </div>
                          <div className="inline-block ml-2 px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                            {testimonial.improvement}
                          </div>
                        </div>
                        <p className="text-sm text-foreground/80 leading-relaxed italic">
                          "{testimonial.comment}"
                        </p>
                        <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
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
