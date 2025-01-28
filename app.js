const app = Vue.createApp({
    data() {
      return {
        totalImages: 488, // Total number of images in the folder
        imagesPerPage: 16, // Number of images per page
        currentPage: 1, // Current page
        showModal: false, // Modal visibility
        currentImage: null, // Current image to display in the modal
      };
    },
    computed: {
      totalPages() {
        return Math.ceil(this.totalImages / this.imagesPerPage);
      },
      paginatedImages() {
        const start = (this.currentPage - 1) * this.imagesPerPage + 1;
        const end = start + this.imagesPerPage;
        return Array.from({ length: this.imagesPerPage }, (_, i) => start + i).filter(i => i <= this.totalImages);
      },
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      showImage(image) {
        this.currentImage = image;
        this.showModal = true;
      },
      closeModal() {
        this.showModal = false;
        this.currentImage = null;
      },
    },
  });
  
  app.mount('#app');
  