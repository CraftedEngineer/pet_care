export const pageMarkup = `<header class="site-header">
    <nav class="nav" aria-label="主导航">
      <a class="brand" href="#top" aria-label="泡泡爪宠物洗护首页">
        <span class="brand-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <circle cx="7.2" cy="9" r="2.2" fill="currentColor"></circle>
            <circle cx="12" cy="6.8" r="2.3" fill="currentColor"></circle>
            <circle cx="16.8" cy="9" r="2.2" fill="currentColor"></circle>
            <path d="M6.2 16.2c.7-3 3-5.2 5.8-5.2s5.1 2.2 5.8 5.2c.5 2.1-1 3.8-3.1 3.2a8.8 8.8 0 0 0-5.4 0c-2.1.6-3.6-1.1-3.1-3.2Z" fill="currentColor"></path>
          </svg>
        </span>
        泡泡爪宠物洗护
      </a>
      <div class="nav-links">
        <a href="#services">服务</a>
        <a href="#environment">环境</a>
        <a href="#process">流程</a>
        <a href="#price">价格</a>
        <a href="#reviews">口碑</a>
        <a href="#booking">预约</a>
      </div>
      <a class="nav-action" href="#booking">立即预约</a>
    </nav>
  </header>

  <main id="top">
    <section class="hero">
      <img class="hero-image" src="/assets/hero-pet-grooming.png" alt="刚完成洗护、裹着毛巾的干净小狗">
      <div class="hero-inner">
        <div class="hero-copy">
          <span class="eyebrow">猫狗洗护 美容护理</span>
          <h1>让每一次洗护都像被温柔照顾</h1>
          <p>泡泡爪为猫咪和狗狗提供低应激洗护、造型修剪、皮毛养护和到店接送服务。透明流程、独立消毒、护理师一对一看护。</p>
          <div class="hero-actions">
            <a class="button primary" href="#booking">预约到店</a>
            <a class="button secondary" href="#services">查看服务</a>
          </div>
          <div class="hero-stats" aria-label="门店数据">
            <div class="stat">
              <strong>35min</strong>
              <span>小型犬基础洗护</span>
            </div>
            <div class="stat">
              <strong>1v1</strong>
              <span>护理师全程陪护</span>
            </div>
            <div class="stat">
              <strong>4.9</strong>
              <span>顾客综合评分</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="services">
      <div class="section-head">
        <div>
          <span class="eyebrow">精选服务</span>
          <h2>从清洁到造型，一次完成宠物日常护理</h2>
        </div>
        <p>所有毛巾、梳具、浴盆分区消毒。敏感肌、幼宠、老年宠会先做状态评估，再匹配洗护用品和吹风方式。</p>
      </div>

      <div class="service-grid">
        <article class="card service-card">
          <div class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M6 15c3-4 9-4 12 0"></path><path d="M7 15v4h10v-4"></path><path d="M9 8h6"></path><path d="M10 4h4v4h-4z"></path></svg>
          </div>
          <div>
            <h3>基础洁净洗护</h3>
            <p>沐浴、护毛、吹干、梳毛、脚底毛清理、耳道清洁。</p>
          </div>
          <small>适合每月日常护理</small>
        </article>

        <article class="card service-card">
          <div class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M4 20 20 4"></path><path d="m15 4 5 5"></path><path d="M8 16l-4 4"></path><path d="M14 10l6 6"></path></svg>
          </div>
          <div>
            <h3>造型修剪</h3>
            <p>泰迪装、圆脸修、爪型修饰、局部打薄，保留自然蓬松感。</p>
          </div>
          <small>先沟通脸型和毛量</small>
        </article>

        <article class="card service-card">
          <div class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M12 3c4 4 6 7.2 6 10a6 6 0 0 1-12 0c0-2.8 2-6 6-10Z"></path><path d="M9.5 14.5c1.5 1.4 3.4 1.4 5 0"></path></svg>
          </div>
          <div>
            <h3>皮毛养护</h3>
            <p>针对掉毛、打结、皮屑、干燥问题，搭配深层护理方案。</p>
          </div>
          <small>适合换毛季和长毛宠</small>
        </article>

        <article class="card service-card">
          <div class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M5 17h14"></path><path d="M7 17l2-8h6l2 8"></path><path d="M8 21h8"></path><path d="M10 5h4"></path></svg>
          </div>
          <div>
            <h3>猫咪低应激</h3>
            <p>预约分时段接待，安静吹干、减少等待，降低陌生环境压力。</p>
          </div>
          <small>建议提前沟通性格</small>
        </article>
      </div>
    </section>

    <section class="section" id="environment">
      <div class="section-head">
        <div>
          <span class="eyebrow">店内环境</span>
          <h2>分区洗护、通透可见，让宠物在安静空间里完成护理</h2>
        </div>
        <p>门店以接待、洗护、造型分区动线为核心，搭配玻璃隔断、恒温照明和独立收纳，让高频消毒与低应激体验同时发生。</p>
      </div>

      <div class="environment">
        <div class="environment-carousel" aria-live="polite">
          <article class="environment-slide is-active" data-environment-slide>
            <img src="/assets/store-environment-reception.png" alt="高端宠物洗护店接待与等候区">
            <div class="environment-caption">
              <h3>接待与等候区</h3>
              <p>柔和木饰面、石材台面和产品陈列区，给主人清晰沟通护理方案，也让宠物先适应空间气味与声音。</p>
            </div>
          </article>
          <article class="environment-slide" data-environment-slide>
            <img src="/assets/store-environment-spa.png" alt="高端宠物洗护店恒温洗护区">
            <div class="environment-caption">
              <h3>恒温洗护区</h3>
              <p>独立浴缸、玻璃分隔和分层毛巾收纳，保持湿区干净通透，减少交叉干扰和等待压力。</p>
            </div>
          </article>
          <article class="environment-slide" data-environment-slide>
            <img src="/assets/store-environment-styling.png" alt="高端宠物洗护店造型吹护区">
            <div class="environment-caption">
              <h3>造型吹护区</h3>
              <p>专业美容台、低噪吹护设备和工具抽屉分区摆放，方便护理师一对一完成修剪、梳理与状态复查。</p>
            </div>
          </article>
        </div>

        <aside class="environment-panel">
          <div>
            <span class="tag">Premium Space</span>
            <h3>看得见的整洁，比香味更重要</h3>
            <p>我们把湿区、干区、等候区分开管理，护理前后都能快速清洁复位。主人到店时看到的是空间，宠物感受到的是安静和稳定。</p>
          </div>
          <div class="environment-controls" role="tablist" aria-label="切换店内环境图片">
            <button class="environment-tab is-active" type="button" data-environment-tab="0" aria-selected="true">
              <span>接待区</span> 01
            </button>
            <button class="environment-tab" type="button" data-environment-tab="1" aria-selected="false">
              <span>洗护区</span> 02
            </button>
            <button class="environment-tab" type="button" data-environment-tab="2" aria-selected="false">
              <span>造型区</span> 03
            </button>
          </div>
        </aside>
      </div>
    </section>

    <section class="band" id="process">
      <div class="section process">
        <div class="process-note">
          <span class="eyebrow" style="color:#ffe7d9">护理流程</span>
          <h2>每一步都看得见，宠物更安心，主人更放心</h2>
          <p>到店后先做基础检查，再进入洗护区。护理完成后会反馈毛发、皮肤、耳道和指甲状态，也会给出下次护理建议。</p>
        </div>
        <div class="step-list">
          <article class="step">
            <div class="step-number">01</div>
            <div>
              <h3>到店评估</h3>
              <p>记录体型、毛量、皮肤状态、性格习惯，确认是否有敏感区域。</p>
            </div>
          </article>
          <article class="step">
            <div class="step-number">02</div>
            <div>
              <h3>温和洗护</h3>
              <p>根据宠物状态选择水温、洗护用品和清洁顺序，避免过度刺激。</p>
            </div>
          </article>
          <article class="step">
            <div class="step-number">03</div>
            <div>
              <h3>吹干梳理</h3>
              <p>分层吹干、顺毛梳开结点，长毛宠会重点处理腋下和耳后。</p>
            </div>
          </article>
          <article class="step">
            <div class="step-number">04</div>
            <div>
              <h3>护理反馈</h3>
              <p>交付前复查毛发蓬松度和皮肤状态，给主人同步护理记录。</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="price">
      <div class="section-head">
        <div>
          <span class="eyebrow">透明价格</span>
          <h2>按体型和护理复杂度计费，进店前就能心里有数</h2>
        </div>
        <p>以下为参考价，实际费用会根据体重、毛量、打结程度和宠物配合度确认。不会在未告知的情况下增加项目。</p>
      </div>

      <div class="price-grid">
        <article class="card price-card">
          <span class="tag">基础洗护</span>
          <div class="price"><strong>¥68</strong><span>起</span></div>
          <h3>短毛犬猫日常清洁</h3>
          <p>适合定期到店洗澡、轻度梳理的宠物。</p>
          <ul>
            <li>沐浴护毛与吹干</li>
            <li>指甲、耳道、脚底毛</li>
            <li>皮肤与毛发状态反馈</li>
          </ul>
        </article>

        <article class="card price-card featured">
          <span class="tag">人气套餐</span>
          <div class="price"><strong>¥158</strong><span>起</span></div>
          <h3>洗护加造型修剪</h3>
          <p>适合泰迪、比熊、雪纳瑞等需要维持造型的宠物。</p>
          <ul>
            <li>基础洗护全套项目</li>
            <li>脸部、身体、四肢修型</li>
            <li>造型前沟通效果参考</li>
          </ul>
        </article>

        <article class="card price-card">
          <span class="tag">深层护理</span>
          <div class="price"><strong>¥198</strong><span>起</span></div>
          <h3>换毛季皮毛养护</h3>
          <p>适合掉毛明显、毛发干燥、轻中度打结的宠物。</p>
          <ul>
            <li>开结梳理与废毛处理</li>
            <li>滋养护毛与皮肤护理</li>
            <li>居家梳毛建议</li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section" id="reviews">
      <div class="section-head">
        <div>
          <span class="eyebrow">顾客口碑</span>
          <h2>主人愿意回来的理由，通常都藏在细节里</h2>
        </div>
        <p>我们重视宠物的情绪，也重视主人的信任。每一次护理都尽量减少等待、减少噪音、减少不确定。</p>
      </div>

      <div class="reviews-carousel" aria-live="polite">
        <div class="review-slides">
          <article class="review-slide is-active" data-review-slide>
            <div class="review-copy">
              <span class="review-rating" aria-label="五星评价">★★★★★</span>
              <h3>“我家比熊以前洗澡会一直发抖，这次护理师先陪它熟悉环境，洗完状态很放松。”</h3>
              <p>毛发吹得很蓬松，脸型也修得自然。最喜欢的是结束后会告诉我耳朵和皮肤情况，感觉不是流水线服务。</p>
              <strong>小桃主人 · 比熊</strong>
            </div>
            <div class="review-detail">
              <span>回访记录</span>
              <p>连续预约 6 次，固定同一位护理师，近期打结和泪痕情况明显减轻。</p>
            </div>
          </article>

          <article class="review-slide" data-review-slide>
            <div class="review-copy">
              <span class="review-rating" aria-label="五星评价">★★★★★</span>
              <h3>“长毛猫开结处理很耐心，没有一上来就建议剃毛。”</h3>
              <p>护理师会先解释哪些地方能保留，哪些地方需要处理。吹风的时候也会停下来安抚，猫咪回家没有躲起来。</p>
              <strong>奶盖主人 · 布偶猫</strong>
            </div>
            <div class="review-detail">
              <span>护理重点</span>
              <p>耳后、腋下、尾根分区开结，搭配低噪吹干和护毛喷雾。</p>
            </div>
          </article>

          <article class="review-slide" data-review-slide>
            <div class="review-copy">
              <span class="review-rating" aria-label="五星评价">★★★★★</span>
              <h3>“预约时间准，不用排很久，接送也很方便。”</h3>
              <p>洗完香味很清爽，不会特别刺鼻。店员还拍了洗护前后的照片，接回家一看爪垫和耳朵都处理得很干净。</p>
              <strong>豆豆主人 · 柯基</strong>
            </div>
            <div class="review-detail">
              <span>主人最满意</span>
              <p>准点接待、结束提醒及时，适合工作日临时安排护理。</p>
            </div>
          </article>

          <article class="review-slide" data-review-slide>
            <div class="review-copy">
              <span class="review-rating" aria-label="五星评价">★★★★★</span>
              <h3>“老年犬洗护让我最担心，但这次全程都很稳。”</h3>
              <p>会主动问心脏和关节情况，吹干没有一直强吹。结束后还提醒我最近皮肤有点干，回去少用太热的水。</p>
              <strong>团团主人 · 11岁博美</strong>
            </div>
            <div class="review-detail">
              <span>特别照顾</span>
              <p>缩短站立时间，分段休息，洗护后同步关节、皮肤和指甲状态。</p>
            </div>
          </article>

          <article class="review-slide" data-review-slide>
            <div class="review-copy">
              <span class="review-rating" aria-label="五星评价">★★★★★</span>
              <h3>“第一次做造型修剪，沟通比我想象得细。”</h3>
              <p>会拿照片确认想要的圆脸效果，也会说明毛量不够的位置怎么修更自然。最后不是网红模板，是适合我家狗的样子。</p>
              <strong>芝麻主人 · 泰迪</strong>
            </div>
            <div class="review-detail">
              <span>造型反馈</span>
              <p>脸部轮廓、四肢比例、尾巴长度在修剪前逐项确认。</p>
            </div>
          </article>
        </div>

        <div class="review-controls" aria-label="客户评价轮播控制">
          <button class="review-dot is-active" type="button" data-review-dot="0"></button>
          <button class="review-dot" type="button" data-review-dot="1"></button>
          <button class="review-dot" type="button" data-review-dot="2"></button>
          <button class="review-dot" type="button" data-review-dot="3"></button>
          <button class="review-dot" type="button" data-review-dot="4"></button>
        </div>
      </div>
    </section>

    <section class="section" id="booking">
      <div class="info-wrap">
        <aside class="info-panel">
          <span class="eyebrow" style="color:#ffe7d9">门店信息</span>
          <h2>今天就给小家伙安排一次清爽护理</h2>
          <div class="info-list">
            <p><strong>营业时间：</strong>周一至周日 10:00-21:00</p>
            <p><strong>门店地址：</strong>北京市海淀区西北旺街道万家灯火大厦</p>
            <p><strong>导航定位：</strong>万家灯火大厦，地图标记处即到店位置</p>
            <p><strong>联系电话：</strong>138-0000-6688</p>
            <p><strong>温馨提示：</strong>猫咪、幼宠、老年宠建议提前电话沟通状态。</p>
          </div>
        </aside>

        <form class="booking" action="#" method="post" id="bookingForm">
          <h3>预约咨询</h3>
          <div class="form-grid">
            <label>
              主人姓名
              <input type="text" name="name" placeholder="请输入姓名">
            </label>
            <label>
              联系电话
              <input type="tel" name="phone" placeholder="请输入手机号">
            </label>
            <label>
              宠物类型
              <select name="pet">
                <option>小型犬</option>
                <option>中大型犬</option>
                <option>猫咪</option>
                <option>其他宠物</option>
              </select>
            </label>
            <label>
              预约项目
              <select name="service">
                <option>基础洗护</option>
                <option>洗护加造型</option>
                <option>皮毛养护</option>
                <option>先电话咨询</option>
              </select>
            </label>
            <label class="wide">
              期望到店时间
              <input type="datetime-local" name="arrivalTime">
            </label>
            <label class="wide">
              备注
              <textarea name="message" placeholder="例如宠物体重、是否怕吹风、是否打结"></textarea>
            </label>
          </div>
          <button class="button primary" type="submit">提交预约信息</button>
          <p class="form-status" id="formStatus" role="status" aria-live="polite"></p>
        </form>

        <figure class="store-map card" aria-label="泡泡爪宠物洗护门店位置示意图">
          <img src="/assets/store-map-ai.png" alt="泡泡爪宠物洗护位于北京市海淀区西北旺街道万家灯火大厦的可爱风格地图">
        </figure>
      </div>
    </section>
  </main>

  <footer>
    泡泡爪宠物洗护 · 专业猫狗洗护美容 · 让干净和安心一起到家
  </footer>`;
