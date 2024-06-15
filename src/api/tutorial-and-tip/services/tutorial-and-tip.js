'use strict';

/**
 * tutorial-and-tip service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tutorial-and-tip.tutorial-and-tip');
