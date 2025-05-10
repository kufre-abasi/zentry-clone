import { defineStore } from 'pinia'
// import { useI18n } from 'vue-i18n'
// const { t } = useI18n()

const useFaqStore = defineStore('help', {
  state: () => {
    return {
      faqs: [],
      // earn_faqs: [],
      // faqs: [
      //   {
      //     name: t('partnerWithTecR.FAQs.first.name'),
      //     content: t('partnerWithTecR.FAQs.first.content'),
      //     showContent: false,
      //     fags_category: 'user-accounts'
      //   },
      //   {
      //     name: ' How do I create an account (with zentry-clone)?',
      //     content: `Lorem`,
      //     showContent: false,
      //     fags_category: 'user-accounts'
      //   },
      //   {
      //     name: 'How to Request A Ride?',
      //     content: `Lorem`,
      //     showContent: false,
      //     fags_category: 'user-accounts'
      //   },
      //   {
      //     name: ' How to Make Payment?',
      //     content: `Lorem`,
      //     showContent: false,
      //     fags_category: 'user-accounts'
      //   },
      //   {
      //     name: 'Is the fare fixed?',
      //     content: `Lorem`,
      //     showContent: false,
      //     fags_category: 'user-accounts'
      //   },
      //   {
      //     name: ' How do I contact customer support?',
      //     content: `Lorem`,
      //     showContent: false,
      //     fags_category: 'creative-talents'
      //   },
      //   {
      //     name: ' Do you offer wheelchair-accessible vehicles?',
      //     content: `Lorem`,
      //     showContent: false,
      //     fags_category: 'creative-talents'
      //   }
      // ],
      earn_faqs: [
        {
          name: 'What are the requirements for registering on the Tec-R Fleet owner portal?',
          content: `Lorem`,
          showContent: false,
          fags_category: 'user-accounts'
        },
        {
          name: 'How many vehicles are required to be a Fleet owner?',
          content: `Lorem`,
          showContent: false,
          fags_category: 'user-accounts'
        },
        {
          name: 'How much can I potentially earn as a Fleet owner?',
          content: `Lorem`,
          showContent: false,
          fags_category: 'user-accounts'
        },
        {
          name: 'How can I get help?',
          content: `Lorem`,
          showContent: false,
          fags_category: 'user-accounts'
        },
        {
          name: 'What safety measures are in place?',
          content: `Lorem`,
          showContent: false,
          fags_category: 'user-accounts'
        }
      ]
    }
  },
  getters: {},
  actions: {
    setFaqs(faqs) {
      this.faqs = faqs
    },
    setEarnFaqs(earnFaqs) {
      this.earn_faqs = earnFaqs
    },
    toogleFaq(index) {
      this.faqs.map((item) => {
        item.showContent = false
      })

      this.faqs[index].showContent = !this.faqs[index].showContent
    }
  }
})

export default useFaqStore
