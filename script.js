"use strict";

let questions,
  services,
  serviceType,
  serviceList,
  questionType,
  questionList,
  responseList,
  responseType,
  quotations = [];

const Confirm = {
  open(options) {
    this.options = Object.assign(
      {},
      {
        title: "",
        message: "",
        okText: "OK",
        cancelText: "Cancel",
        onok: function () {},
        oncancel: function () {},
      },
      options
    );

    const html = `
          <div class="confirm">
              <div class="confirm__window">
                  <div class="confirm__titlebar">
                      <span class="confirm__title">${this.options.title}</span>
                      <button class="confirm__close">&times;</button>
                  </div>
                  <div class="confirm__content">${this.options.message}</div>
                  <div class="confirm__buttons">
                      <button class="confirm__button confirm__button--ok confirm__button--fill">${this.options.okText}</button>
                      <button class="confirm__button confirm__button--cancel">${this.options.cancelText}</button>
                  </div>
              </div>
          </div>
      `;

    const template = document.createElement("template");
    template.innerHTML = html;

    // Elements
    const confirmEl = template.content.querySelector(".confirm");
    const btnClose = template.content.querySelector(".confirm__close");
    const btnOk = template.content.querySelector(".confirm__button--ok");
    const btnCancel = template.content.querySelector(
      ".confirm__button--cancel"
    );

    confirmEl.addEventListener("click", (e) => {
      if (e.target === confirmEl) {
        this._close(confirmEl, this.options.oncancel);
      }
    });

    btnOk.addEventListener("click", (e) => {
      this._close(confirmEl, this.options.onok);
    });

    [btnClose, btnCancel].forEach((el) => {
      el.addEventListener("click", (e) => {
        this._close(confirmEl, this.options.oncancel);
      });
    });

    document.body.appendChild(template.content);
  },

  _close(confirmEl, callBack) {
    confirmEl.classList.add("confirm--close");

    confirmEl.addEventListener("animationend", () => {
      if (confirmEl) confirmEl.remove();
      callBack();
    });
  },
};

const Notification = {
  open(options) {
    this.options = Object.assign(
      {},
      {
        container: "",
        array: [],
        buttonText: "OK",
        buttonClick: function () {},
        itemClick: function () {},
      },
      options
    );

    if (this.options.container.querySelector(".notification")) {
      this._close(
        this.options.container.querySelector(".overlay"),
        this.options.container.querySelector(".notification")
      );
      return;
    }

    const html = `
      <div class="overlay"></div>
      <div class="notification">
      ${this.options.array
        .map((r) => {
          return `<div class="notification__item"  data-type="${r.type}" data-service="${r.service}">${r.name}</div>`;
        })
        .join("")}
        <button class="notification__button">${this.options.buttonText}</button>
      </div>
      `;

    const template = document.createElement("template");
    template.innerHTML = html;

    // Elements
    const overlay = template.content.querySelector(".overlay");
    const notificationEl = template.content.querySelector(".notification");
    const btnClick = template.content.querySelector(".notification__button");
    const items = template.content.querySelectorAll(".notification__item");

    btnClick.addEventListener("click", () => {
      this.options.buttonClick();
      this._close(overlay, notificationEl);
    });

    overlay.addEventListener("click", () => {
      this._close(overlay, notificationEl);
    });

    Array.from(items).forEach((item) => {
      item.addEventListener("click", (e) => {
        this.options.itemClick(e.target.dataset.service);
        this._close(overlay, notificationEl);
      });
    });

    this.options.container.appendChild(template.content);
  },

  _close(overlay, notification) {
    notification.classList.add("notification--close");
    this.options.container.removeChild(overlay);

    notification.addEventListener("animationend", () => {
      this.options.container.removeChild(notification);
    });
  },
};

const Form = {
  show(options) {
    this.options = Object.assign(
      {},
      {
        container: "",
        object: {},
        buttonText: "OK",
        buttonClick: function () {},
        itemClick: function () {},
      },
      options
    );

    if (document.querySelector(".form")) {
      this._close(document.querySelector(".form"));
      return;
    }

    const padString = (str) => str.toString().padStart(2, "0");

    const addLabel = (i, j, labels) => {
      return labels
        .map((a, k) => {
          return `<label for="response-${padString(i)}-${padString(
            j
          )}-${padString(k)}" class="radio">
        <input
          type="radio"
          name="question-${padString(i)}-${padString(j)}"
          id="response-${padString(i)}-${padString(j)}-${padString(k)}"
          class="radio__input"
          data-response = "${a}"
        />
        <div class="radio__radio"></div>
        ${responseList[a]}
      </label>`;
        })
        .join("");
    };

    const addLi = (li, i) => {
      return this.options.object[li]
        .map((b, j) => {
          return `  <li class="content">
            <div class="question">
            ${questionList[questions[b].question]}
            </div>
            <div class="notes">
              ${questions[b].notes}
            </div>
            <div class="response">
              ${addLabel(i, j, questions[b].responses)}
            </div>
          </li>`;
        })
        .join("");
    };

    const addFieldset = () => {
      return Object.keys(this.options.object)
        .map((a, i) => {
          return `<fieldset class="contents">
        <legend>${
          a === "generic" ? "" : serviceList[parseInt(a)]
        } Questions</legend>
        <ol>
          ${addLi(a, i)}
        </ol>
      </fieldset>`;
        })
        .join("");
    };

    const html = `<div class="form">
      <span class="arrow-back"> </span>
      <p class="instructions">
        <strong>Instructions:</strong> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Deserunt officiis illo dicta voluptates. Nobis
        corrupti laboriosam ad officiis alias soluta!
      </p>
      ${addFieldset()}
      <button class="form__button">Send request</button>
    </div>`;

    const template = document.createElement("template");
    template.innerHTML = html;

    // BUTTONS
    const [form, back] =
      template.content.querySelectorAll(".form, .arrow-back");
    const fieldsets = template.content.querySelectorAll(".contents");

    const radioInputs = template.content.querySelectorAll(".radio__input");

    back.addEventListener("click", () => {
      this._close(form);
    });

    Array.from(radioInputs).forEach((input) => {
      input.addEventListener("change", ({ target }) => {
        // GET THE CLOSEST 'li' AND 'fieldset' TAGS
        const li = target.closest(".content");
        const fieldset = target.closest(".contents");

        const lis = fieldset.querySelectorAll(".content");

        console.log(fieldset);
        console.log(Array.from(fieldsets).findIndex((r) => r === fieldset));
      });
    });

    document.body.appendChild(template.content);
  },

  _close(form) {
    form.classList.add("form--close");
    form.addEventListener("animationend", () => {
      form.remove();
    });
  },
};

const init = () => {
  let curSlide = 0,
    maxSlide = 0;

  const renderView = () => {
    /**
     * OBJECTS
     */
    class Service {
      constructor(options) {
        this.options = Object.assign(
          {},
          {
            type: "",
            service: "",
            index: "",
            title: "",
            long: "",
            services: "",
            callbackService: () => {},
            callbackOther: () => {},
          },
          options
        );

        this.div = document.createElement("div");
        this.div.className = "slide";
        this.div.style.transform = `translateX(${maxSlide * 100}%)`;
        this.div.innerHTML = `
        <div class="slide-left-panel">
         
          <div>
            <label type="checkbox"
            for="service-${padNums(this.options.index)}" class="checkbox">
              <input
               type="checkbox"
               id="service-${padNums(this.options.index)}"
               class="checkbox__input"
               data-service="${this.options.index}"
               data-type="${this.options.type}"
             />
             <div
               class="checkbox__box checkbox__box--checked checkbox__box--unchecked"
             ></div>
             <span>${this.options.service}</span>
            </label>
          </div>
    
          <h4>
            ${this.options.long}
          </h4>
         
        </div>`;

        this.div
          .querySelector(".slide-left-panel input")
          .addEventListener("change", (e) => {
            this.options.callbackService(e.target);
          });
      }
    }

    class Our extends Service {
      constructor(options) {
        super(options);

        this.div.insertAdjacentHTML(
          "beforeend",
          `<div class="slide-right-panel">
       <fieldset class="slide-fieldset">
         <legend class="slide-fieldset__legend">
           <span>
             Please bookmark the
             <strong>Other Services</strong>
             you like to add in the package</span
           >
         </legend>

         ${this.options.services
           .map((r, i) => {
             return `<div>
           <label type="checkbox"
           for="${padNums(this.options.index)}-${padNums(i)}"
           class="checkbox">
             <input
               type="checkbox"
               name="service-${padNums(this.options.index)}"
               id="${padNums(this.options.index)}-${padNums(i)}"
               data-type="${services[r].serviceType}"
               data-service="${r}"
               class="checkbox__input"
               disabled
             />
             <div
               class="checkbox__box checkbox__box--checked checkbox__box--unchecked"
             ></div>
             <span>${serviceList[r]}</span>
           </label>
         </div>`;
           })
           .join("")}
       </fieldset>
     </div>
   `
        );

        this.div
          .querySelectorAll(".slide-right-panel input")
          .forEach((input) => {
            input.addEventListener("change", (e) => {
              this.options.callbackOther(e.target);
            });
          });
      }
    }

    class Dot {
      constructor(options) {
        this.options = Object.assign(
          {},
          {
            index: "",
            callback: () => {},
          },
          options
        );

        this.div = document.createElement("div");
        this.div.className = "dots__dot";
        this.div.dataset.service = this.options.index;

        this.div.addEventListener("click", (e) => {
          this.options.callback(e.target.dataset.service);
        });
      }
    }

    class Accordion {
      constructor(options) {
        this.options = Object.assign(
          {},
          {
            id: "",
            services: [],
            callback: () => {},
          },
          options
        );

        this.div = document.createElement("div");
        this.div.innerHTML = `
          <input
            type="checkbox"
            name="accordion"
            id="accordion-${this.options.id}" 
            class="accordion__input"
            checked
          />
          <label for="accordion-${this.options.id}" class="accordion__label">${
          this.options.name
        } Services</label>
          <div class="accordion__content">
            ${this.options.services
              .map((service) => {
                return `<div class="service" data-service="${service.index}">
                  <span class="service__title" >
                    <strong>
                      ${service.service}. 
                    </strong>
                    ${service.short}
                    </span>
                </div>`;
              })
              .join("")}
                  
          </div>`;

        Array.from(this.div.querySelectorAll(".service")).forEach((r) => {
          r.addEventListener("click", (e) => {
            this.options.callback(e.target.closest(".service").dataset.service);
          });
        });
      }
    }

    /**
     * CONS
     */
    const slider = document.querySelector(".slider");
    const dots = document.querySelector(".dots");
    const accordion = document.querySelector(".accordion ");

    let slidesFrag = document.createDocumentFragment("");
    let dotsFrag = document.createDocumentFragment("");
    let accordionsFrag = document.createDocumentFragment("");

    let objAccordion = {};

    /**
     * INVOKE
     */
    services.forEach((service, index) => {
      const type = serviceType[service.serviceType].toLowerCase();

      if (type === "addon") return;

      // ADD SLIDE
      const optionsSlide = {
        type: service.serviceType,
        service: serviceList[service.service],
        index: index,
        title: service.title,
        long: service.long,
        services: service.services,
        callbackService: callbackService,
        callbackOther: callbackOther,
      };

      let slide;

      if (type === "resume") slide = new Our(optionsSlide);
      else slide = new Service(optionsSlide);
      slidesFrag.append(slide.div);

      // ADD DOT
      const optionsDot = {
        index: index,
        callback: callbackDot,
      };

      const dot = new Dot(optionsDot);

      dotsFrag.append(dot.div);

      // CREATE ACCORDION
      if (
        Object.keys(objAccordion).indexOf(serviceType[service.serviceType]) ==
        -1
      )
        objAccordion[serviceType[service.serviceType]] = [];

      objAccordion[serviceType[service.serviceType]].push({
        type: serviceType[service.serviceType],
        index: index,
        service: serviceList[service.service],
        short: service.short,
      });

      maxSlide++;
    });

    /**
     * CREATE ACCORDION FRAG SEPARATELY
     */
    Object.keys(objAccordion).forEach((key, index) => {
      const options = {
        name: key,
        id: removeWhiteSpace(key),
        services: objAccordion[key],
        callback: callbackAccordion,
      };

      const accordions = new Accordion(options);
      accordionsFrag.append(accordions.div);
    });

    /**
     * RENDER
     */

    slider.append(slidesFrag);
    dots.append(dotsFrag);
    accordion.append(accordionsFrag);
    activateDot(curSlide);
  };

  /**
   * CALLBACKS
   */
  const callbackService = (input) => {
    const confirmBook = (input) => {
      const index = findQuotation("type", 0);

      // IF BOOKMARKED, CHECK IF THERE ARE "OUR SERVICE" ALREADY BOOKMARKED
      if (index !== -1) {
        Confirm.open({
          title: "Main Service found",
          message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt reprehenderit sapiente quo cumque at natus laboriosam cupiditate, sint provident doloremque molestiae, repudiandae itaque culpa commodi necessitatibus quae. Nesciunt, tempore.",
          onok: () => {
            const unbook = quotations.splice(index, 1);
            //FIND THE SLIDE OF THE CONNECTED "OUR SERVICES". INDEX IS ALSO THE SLIDE NUMBER
            toggleInputs(parseInt(input.dataset.service), !input.checked);
            // DISABLE OTHER INPUTS IN PREVIOUS SLIDE
            toggleInputs(unbook[0].service, true);
            unbookServices(unbook[0].service);
            addService(input);
          },
          oncancel: () => {
            input.checked = !input.checked;
          },
        });

        return;
      }

      // CHECK IF OTHER SERVICE IS CHECKED PRIOR TO CHECKING OF MAIN SERVICE
      const otherIndex = findQuotation("type", 1);

      if (otherIndex !== -1) {
        Confirm.open({
          title: "Other found",
          message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt reprehenderit sapiente quo cumque at natus laboriosam cupiditate, sint provident doloremque molestiae, repudiandae itaque culpa commodi necessitatibus quae. Nesciunt, tempore.",
          onok: () => {
            toggleInputs(parseInt(input.dataset.service), !input.checked);
            addOthers(parseInt(input.dataset.service));
            addService(input);
          },
          oncancel: () => {
            input.checked = !input.checked;
          },
        });

        return;
      }

      toggleInputs(parseInt(input.dataset.service), !input.checked);
      addService(input);
    };

    const confirmOther = (input) => {
      const index = findQuotation("type", 0);
      // IF BOOKMARKED, CHECK IF THERE ARE "OUR SERVICE" ALREADY BOOKMARKED
      if (index !== -1) {
        Confirm.open({
          title: "Add other to main",
          message:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore sunt reprehenderit sapiente quo cumque at natus laboriosam cupiditate, sint provident doloremque molestiae, repudiandae itaque culpa commodi necessitatibus quae. Nesciunt, tempore.",
          onok: () => {
            toggleOther(
              quotations[index].service,
              parseInt(input.dataset.service),
              input.checked
            );

            if (input.checked) {
              addService(input);
            } else {
              removeService("service", parseInt(input.dataset.service));
            }
          },
          oncancel: () => {
            input.checked = !input.checked;
          },
        });

        return;
      }

      if (input.checked) {
        addService(input);
      } else {
        removeService("service", parseInt(input.dataset.service));
      }
    };

    const unbookServices = (index) => {
      slides[index].querySelectorAll("input").forEach((input) => {
        // UNCHECK SERVICES IN MAIN TAB
        input.checked = false;

        // REMOVE FROM THE QUOTATIONS
        removeService("service", parseInt(input.dataset.service));

        // IF OTHER INPUT, UNCHECK CONNECTED SLIDE
        if (serviceType[parseInt(input.dataset.type)] === "Other")
          document.querySelectorAll(".slide-left-panel input")[
            parseInt(input.dataset.service)
          ].checked = false;
      });
    };

    // GETL ALL BOOKMARKED (OTHERS SERVICES ONLY) THAT WERE BOOKMARKED PRIOR TO MAIN. UPDATE OTHER SERVICES INPUT IN  MAIN SERVICE (CURRENT) SLIDE
    const addOthers = (num) => {
      const others = quotations
        .filter((r) => r.type === 1)
        .map((r) => r.service);

      Array.from(
        slides[num].querySelectorAll(".slide-right-panel input")
      ).forEach((r) => {
        if (others.indexOf(parseInt(r.dataset.service)) !== -1)
          r.checked = true;
      });
    };

    //ACTIVATES/ DEACTIVATES ALL INPUTS IN THE RIGHT PANEL OF SLIDE
    const toggleInputs = (service, isDisabled = false) => {
      slides[service]
        .querySelectorAll(".slide-right-panel input")
        .forEach((input) => {
          input.disabled = isDisabled;
        });
    };

    //CHECK/ UNCHECK THE INPUT IN LEFT PANEL OF (OTHER SERVICE ONLY) SLIDE THAT ARE CONNECTED TO THE RIGHT PANEL INPUT (CURRENT AND MAIN SERVICE ONLY) SLIDE
    const toggleOther = (service, other, isChecked = false) => {
      const input = Array.from(
        slides[service].querySelectorAll(".slide-right-panel input")
      ).find((r) => parseInt(r.dataset.service) === other);

      input.checked = isChecked;
    };

    // CHECK IF TYPE IS 'ADD-ON (2)'
    if (parseInt(input.dataset.type) === 2) return;

    // CHECK IF TYPE IS 'MAIN (0)'
    if (parseInt(input.dataset.type) === 0) {
      // CHECK IF THE IT'S BOOKMARKED
      switch (input.checked) {
        case true:
          confirmBook(input);
          break;
        default:
          unbookServices(parseInt(input.dataset.service));
          toggleInputs(parseInt(input.dataset.service), !input.checked);
          toggleBadge();
          break;
      }

      return;
    }

    // NO NEED TO CHECK IF TYPE 1, REMAINING OPTION IS ALREADY TYPE 1
    confirmOther(input);
  };

  const callbackOther = (input) => {
    // ONLY TYPE 1 IS NEEDED, INPUTS ARE TYPE 1 AND 2 ONLY
    if (parseInt(input.dataset.type) === 2) return;

    slides[parseInt(input.dataset.service)].querySelector(
      ".slide-left-panel input"
    ).checked = input.checked;

    if (input.checked) addService(input);
    else removeService("service", parseInt(input.dataset.service));
  };

  const callbackDot = (returnValue) => {
    curSlide = parseInt(returnValue);
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const callbackAccordion = (returnValue) => {
    curSlide = parseInt(returnValue);
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const callbackItem = (returnValue) => {
    curSlide = parseInt(returnValue);
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const callbackBadge = () => {
    // LOOP IN EACH BOOKMARKED SERVICES
    // REMOVE DUPLICATES
    const quotationQuestions = {};

    // KEY FOR THE GENERIC QUESTIONS BASED ON THE RESUME SERVICE,
    // ONLY 1 RESUME SERVICE

    quotationQuestions.generic = [
      ...new Set(
        quotations
          .map((a) => {
            // GET THE QUESTIONS IN EACH SERVICE AND FILTER THE GENERAL QUESTIONS
            return services[a.service].questions.filter((b) => {
              return questionType[questions[b].questionType] === "Generic";
            });
          })
          .flatMap((a) => a)
      ),
    ].sort((a, b) => a - b);

    // LOOP IN EACH BOOKMARKED SERVICES
    quotations.forEach((a) => {
      // GET THE QUESTIONS IN EACH SERVICE AND FILTER THE GENERAL QUESTIONS
      if (serviceType[a.type] === "Resume") return;

      quotationQuestions[a.service] = services[a.service].questions.filter(
        (b) => {
          return questionType[questions[b].questionType] === "Specific";
        }
      );
    });

    Form.show({
      object: quotationQuestions,
    });
  };
  /**
   * FUNCTIONS
   */
  const goToSlide = (slide) =>
    Array.from(slides).forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );

  const activateSlider = () => {
    const nextSlide = () => {
      if (curSlide === maxSlide - 1) curSlide = 0;
      else curSlide++;

      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const prevSlide = () => {
      if (curSlide === 0) curSlide = maxSlide - 1;
      else curSlide--;

      goToSlide(curSlide);
      activateDot(curSlide);
    };
    const [btnPrev, btnNext] = document.querySelectorAll(" .slider-button");

    btnNext.addEventListener("click", nextSlide);
    btnPrev.addEventListener("click", prevSlide);
  };

  // INCLUDES ACTIVATE SERVICE IN ACCORDION PANEL
  const activateDot = (i) => {
    const dots = document.querySelectorAll(".dots__dot");
    const buttons = document.querySelectorAll(".service");

    Array.from(dots).forEach((_, index) => {
      dots[index].classList.remove("dots__dot--active");
      buttons[index].classList.remove("service--active");
    });

    dots[i].classList.add("dots__dot--active");
    buttons[i].classList.add("service--active");
  };

  const padNums = (num) => num.toString().padStart(2, "0");

  const removeWhiteSpace = (str) => str.replace(/\s/g, "").toLowerCase();

  const findQuotation = (key, num) =>
    quotations.findIndex((r) => r[key] === num);

  const toggleBadge = () => {
    // SHOW BADGE IF THERE ARE BOOKMARKED
    badge.textContent = quotations.length;
    if (quotations.length === 0) badge.classList.add("badge--hidden");
    else badge.classList.remove("badge--hidden");
  };

  const addService = (input) => {
    quotations.push({
      type: parseInt(input.dataset.type),
      service: parseInt(input.dataset.service),
      name: serviceList[parseInt(input.dataset.service)],
    });

    toggleBadge();
  };

  const removeService = (type, num) => {
    const index = findQuotation(type, num);
    quotations.splice(index, 1);

    toggleBadge();
  };

  /**
   * INVOCATIONS
   */
  renderView();
  activateSlider();

  const slides = document.querySelectorAll(".slide");
  const badge = document.querySelector(".badge");

  badge.addEventListener("click", (e) => {
    if (quotations.length === 0) return;

    Notification.open({
      container: document.querySelector(".top-panel"),
      array: quotations,
      buttonText: "Continue",
      buttonClick: callbackBadge,
      itemClick: callbackItem,
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  ({ questions, services } = obj);
  ({
    serviceType,
    serviceList,
    questionType,
    questionList,
    responseList,
    responseType,
  } = obj.indices);

  init();
});
