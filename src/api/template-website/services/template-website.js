'use strict';

/**
 * template-website service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::template-website.template-website');
