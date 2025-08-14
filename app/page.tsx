import ProjectCard from "@/components/ProjectCard";
import TechTag from "@/components/TechTag";

export default function Page() {
  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="badge mb-4">Senior ML Engineer</div>
              <h1 className="h1">yizhe Xin</h1>
              <p className="p-muted mt-4">
                专注于 <b>Multi‑Agent</b>、<b>RAG</b>、<b>计算机视觉</b> 与 <b>全栈开发</b>。
                拥有多云架构（GCP / Azure / AWS）落地经验，擅长把前沿研究转化为可规模化的产品。
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <TechTag>LangGraph</TechTag>
                <TechTag>DSPy</TechTag>
                <TechTag>Weaviate</TechTag>
                <TechTag>Neo4j</TechTag>
                <TechTag>YOLO</TechTag>
                <TechTag>Next.js</TechTag>
                <TechTag>GCP</TechTag>
                <TechTag>Azure</TechTag>
                <TechTag>AWS</TechTag>
              </div>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold">Profile</h3>
              <p className="p-muted mt-2">
                Innovative and results‑driven Senior Machine Learning Engineer with strong foundations in
                Computer Science (University of Toronto) and Artificial Intelligence (ANU). Experienced in
                computer vision, multi‑agent systems, and retrieval‑augmented generation (RAG), with
                full‑stack and cloud architecture expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="h2 mb-6">教育背景</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-semibold">Master of Artificial Intelligence</h3>
              <p className="p-muted mt-1">Australian National University (ANU), Canberra, Australia</p>
            </div>
            <div className="card">
              <h3 className="font-semibold">Bachelor of Computer Science</h3>
              <p className="p-muted mt-1">University of Toronto, Canada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="section">
        <div className="container">
          <h2 className="h2 mb-6">作品集</h2>

          {/* Addaxis */}
          <div className="mb-4 p-muted">Addaxis.ai — AI Solutions for I Can Study (ICS)</div>
          <div className="space-y-6">
            <ProjectCard
              title="AI Coach — Multi‑Agent Learning Assistant"
              company="ICS"
              intro="为 ICS 设计并实现基于 multi‑agent system 的智能学习教练，提供个性化指导与反馈。"
              highlights={[
                "设计 AI Agent Workflow 框架，支持多智能体协作与任务分解",
                "基于 LangGraph 构建多智能体系统，实现动态角色分配与条件路由",
                "全栈开发：Next.js + TailwindCSS（前端），FastAPI + Python（后端）",
                "支持实时对话、上下文记忆与知识检索"
              ]}
              img="/images/addaxis-ai-coach.png"
            />
            <ProjectCard
              title="Finder — RAG‑based Knowledge Search Tool"
              company="ICS"
              intro="基于 Retrieval‑Augmented Generation 的智能搜索工具，支持文本与语音查询，快速返回精准答案。"
              highlights={[
                "数据清洗与自动 chunking 策略，提升检索效率与答案相关性",
                "集成语音识别（ASR）技术，实现自然语言语音搜索",
                "Pinecone 向量库与 namespace 管理，高效 embedding 检索",
                "集成 GPT 与定制 Prompt，提高自然度与可信度"
              ]}
              img="/images/addaxis-finder.png"
            />
            <ProjectCard
              title="Mindmap Detector — AI Mindmap Structure Recognition"
              company="ICS"
              intro="基于 YOLO 的脑图结构识别，自动检测并解析思维导图的关键节点与关系。"
              highlights={[
                "YOLO 模型从零训练与优化（精度显著提升）",
                "设计 11 种检测模式（patterns）的算法方案",
                "部署可调用 API，支持批量解析与 JSON 结构化输出"
              ]}
              img="/images/addaxis-mindmap.png"
            />
            <ProjectCard
              title="GCP Cloud Service Development — End‑to‑End AI Pipeline"
              company="ICS"
              intro="端到端云端 AI 服务体系建设，支持多应用场景落地。"
              highlights={[
                "GCP 云架构设计与前后端应用部署",
                "数据处理 Pipeline 构建与自动化执行",
                "高可用部署与性能优化，确保低延迟与高稳定性"
              ]}
              img="/images/addaxis-gcp.png"
            />
          </div>

          {/* SenseTime */}
          <div className="mt-10 mb-4 p-muted">SenseTime Technology — AI Research & Product Development</div>
          <div className="space-y-6">
            <ProjectCard
              title="RAG Application Development"
              intro="基于 DSPy AI（reasoning generation）+ Weaviate + LLM API（Claude、GPT、DeepSeek）的 RAG 应用研发。"
              highlights={[
                "实现多模态知识检索与推理生成",
                "精细化 Prompt Engineering 提升准确率与一致性"
              ]}
              img="/images/sensetime-rag.png"
            />
            <ProjectCard
              title="Database Schema Design"
              intro="面向多类型客户数据与业务场景，设计可扩展数据库 Schema，优化检索与分析性能。"
              highlights={[
                "结合结构化 / 非结构化数据存储方案",
                "支持跨系统数据同步与兼容性"
              ]}
              img="/images/sensetime-schema.png"
            />
            <ProjectCard
              title="Graph RAG Implementation"
              intro="使用 LangGraph + DSPy AI + Neo4j GraphDB 结合主流 LLM 构建图谱增强型检索系统。"
              highlights={[
                "节点关系可视化与推理路径分析",
                "支持 multi‑hop reasoning 与上下文融合"
              ]}
              img="/images/sensetime-graphrag.png"
            />
            <ProjectCard
              title="Graph Analysis Automation"
              intro="构建基于 Neo4j + Microsoft Graph Tools 的自动化图分析平台。"
              highlights={[
                "自动实体抽取与摘要生成",
                "Leiden Algorithm 优化社区划分与节点聚类"
              ]}
              img="/images/sensetime-graph.png"
            />
          </div>

          {/* Others */}
          <div className="mt-10 mb-4 p-muted">Other Projects</div>
          <div className="space-y-6">
            <ProjectCard
              title="Dashboard Full‑Stack Development"
              intro="交互式数据分析 Dashboard，支持实时可视化与多维筛选。"
              highlights={[
                "前端（Next.js + D3.js）与后端（FastAPI）集成",
                "可复用可视化组件与模块化架构"
              ]}
              img="/images/other-dashboard.png"
            />
            <ProjectCard
              title="Social Media ETL Pipeline"
              intro="社交媒体数据 ETL 流程：采集、清洗、转换与存储自动化。"
              highlights={[
                "多源 API 接入（Twitter、Instagram、LinkedIn）",
                "自动数据归档与批量分析"
              ]}
              img="/images/other-etl.png"
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="h2 mb-6">工作经历</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="font-semibold">Senior Machine Learning Engineer — Addaxis.ai</h3>
              <ul className="mt-3 p-muted list-disc ml-5 space-y-2">
                <li>多智能体系统与 RAG 方案落地，进入生产工作流</li>
                <li>云端可扩展 ML Pipeline（GCP / Azure / AWS）设计与架构</li>
                <li>全栈 AI 应用：Next.js / React / Node.js / Python（Flask, FastAPI）</li>
                <li>CV 方案：YOLO、CLIP、OCR、Transformer 系列模型的调优与部署</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="font-semibold">AI Researcher — SenseTime Technology</h3>
              <ul className="mt-3 p-muted list-disc ml-5 space-y-2">
                <li>CV 方向：目标检测、语义分割、视频理解</li>
                <li>大规模神经网络训练与落地优化</li>
                <li>推动产品研发方向与内部分享</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="h2 mb-6">技能</h2>
          <div className="card">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Machine Learning & AI</h4>
                <div className="flex flex-wrap">
                  <TechTag>YOLO (v5–v9)</TechTag>
                  <TechTag>Detectron2</TechTag>
                  <TechTag>OpenCV</TechTag>
                  <TechTag>PaddleOCR</TechTag>
                  <TechTag>Tesseract</TechTag>
                  <TechTag>CLIP</TechTag>
                  <TechTag>Visual Grounding</TechTag>
                  <TechTag>Image‑to‑Table</TechTag>
                </div>
                <div className="flex flex-wrap mt-2">
                  <TechTag>RAG</TechTag>
                  <TechTag>LangChain</TechTag>
                  <TechTag>LlamaIndex</TechTag>
                  <TechTag>OpenAI / Gemini</TechTag>
                  <TechTag>Weaviate</TechTag>
                  <TechTag>Neo4j</TechTag>
                  <TechTag>Knowledge Graph</TechTag>
                </div>
                <div className="flex flex-wrap mt-2">
                  <TechTag>LangGraph</TechTag>
                  <TechTag>AutoGen</TechTag>
                  <TechTag>CrewAI</TechTag>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Full‑Stack & Cloud</h4>
                <div className="flex flex-wrap">
                  <TechTag>Next.js</TechTag>
                  <TechTag>React</TechTag>
                  <TechTag>TypeScript</TechTag>
                  <TechTag>TailwindCSS</TechTag>
                  <TechTag>Python (Flask/FastAPI/Django)</TechTag>
                  <TechTag>Node.js</TechTag>
                  <TechTag>GraphQL</TechTag>
                  <TechTag>PostgreSQL (pgvector)</TechTag>
                  <TechTag>MongoDB</TechTag>
                  <TechTag>Redis</TechTag>
                </div>
                <div className="flex flex-wrap mt-2">
                  <TechTag>GCP (Vertex / Cloud Run / BigQuery)</TechTag>
                  <TechTag>Azure</TechTag>
                  <TechTag>AWS</TechTag>
                  <TechTag>Docker</TechTag>
                  <TechTag>Kubernetes</TechTag>
                  <TechTag>Terraform</TechTag>
                  <TechTag>CI/CD</TechTag>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="h2 mb-4">联系</h2>
          <div className="card">
            <p className="p-muted">邮箱 / LinkedIn / GitHub 链接放这里。你也可以加上简历下载按钮。</p>
          </div>
        </div>
      </section>
    </div>
  );
}
