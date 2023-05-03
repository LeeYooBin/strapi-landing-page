'use strict';

/**
 * another-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::another-page.another-page');
