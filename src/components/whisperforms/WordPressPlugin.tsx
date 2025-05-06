
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const WordPressPlugin = () => {
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6">The WordPress Plugin Code</h2>
      <p className="text-muted-foreground mb-6">
        Here's a preview of the core WhisperForms WordPress plugin code structure.
      </p>
      
      <Card>
        <CardContent className="pt-6">
          <Tabs defaultValue="main" className="w-full">
            <TabsList>
              <TabsTrigger value="main">whisperforms.php</TabsTrigger>
              <TabsTrigger value="admin">admin-class.php</TabsTrigger>
              <TabsTrigger value="form">form-builder.php</TabsTrigger>
            </TabsList>
            <TabsContent value="main" className="mt-4">
              <pre className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-auto text-sm">
                <code>{`<?php
/**
 * Plugin Name: WhisperForms
 * Description: The most powerful free WordPress form builder - no paywalls, with WhisperMail integration.
 * Version: 1.0.0
 * Author: MaintainHQ
 * Author URI: https://maintainhq.com
 * Text Domain: whisperforms
 * Domain Path: /languages
 * License: GPL v2 or later
 */

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

// Define plugin constants
define('WHISPERFORMS_VERSION', '1.0.0');
define('WHISPERFORMS_PATH', plugin_dir_path(__FILE__));
define('WHISPERFORMS_URL', plugin_dir_url(__FILE__));
define('WHISPERFORMS_BASENAME', plugin_basename(__FILE__));

// Load required files
require_once WHISPERFORMS_PATH . 'includes/class-whisperforms.php';
require_once WHISPERFORMS_PATH . 'includes/class-whisperforms-admin.php';
require_once WHISPERFORMS_PATH . 'includes/class-whisperforms-forms.php';
require_once WHISPERFORMS_PATH . 'includes/class-whisperforms-entries.php';
require_once WHISPERFORMS_PATH . 'includes/class-whisperforms-whispermail.php';
require_once WHISPERFORMS_PATH . 'includes/class-whisperforms-maintainhq.php';
require_once WHISPERFORMS_PATH . 'includes/class-whisperforms-cpt.php';

/**
 * Initialize the plugin
 *
 * @return void
 */
function whisperforms_init() {
    // Initialize main plugin class
    $whisperforms = new WhisperForms();
    $whisperforms->init();
    
    // Initialize admin
    if (is_admin()) {
        $admin = new WhisperForms_Admin();
        $admin->init();
    }
    
    // Register shortcodes
    add_shortcode('whisperform', 'whisperforms_shortcode_handler');
}

/**
 * Handle the [whisperform] shortcode
 *
 * @param array $atts Shortcode attributes
 * @return string HTML output
 */
function whisperforms_shortcode_handler($atts) {
    $atts = shortcode_atts(
        array(
            'id' => 0,
        ),
        $atts
    );
    
    if (empty($atts['id'])) {
        return '<p>Error: Form ID is required.</p>';
    }
    
    $form = new WhisperForms_Form($atts['id']);
    return $form->render();
}

// Hook into WordPress
add_action('plugins_loaded', 'whisperforms_init');

// Activation hook
register_activation_hook(__FILE__, 'whisperforms_activate');

// Deactivation hook
register_deactivation_hook(__FILE__, 'whisperforms_deactivate');

/**
 * Plugin activation function
 *
 * @return void
 */
function whisperforms_activate() {
    // Create database tables
    require_once WHISPERFORMS_PATH . 'includes/class-whisperforms-install.php';
    $installer = new WhisperForms_Install();
    $installer->create_tables();
    
    // Add capabilities
    $installer->add_capabilities();
    
    // Create default forms
    $installer->create_default_forms();
}

/**
 * Plugin deactivation function
 *
 * @return void
 */
function whisperforms_deactivate() {
    // Clean up if necessary
}
`}</code>
              </pre>
            </TabsContent>
            
            <TabsContent value="admin" className="mt-4">
              <pre className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-auto text-sm">
                <code>{`<?php
/**
 * Admin functionality for WhisperForms
 */
class WhisperForms_Admin {
    /**
     * Initialize the admin functionality
     */
    public function init() {
        // Add admin menu
        add_action('admin_menu', array($this, 'add_admin_menu'));
        
        // Add admin scripts and styles
        add_action('admin_enqueue_scripts', array($this, 'enqueue_scripts'));
        
        // Add action links
        add_filter('plugin_action_links_' . WHISPERFORMS_BASENAME, array($this, 'add_action_links'));
        
        // Register AJAX handlers
        $this->register_ajax_handlers();
        
        // Initialize form builder
        $this->init_form_builder();
    }
    
    /**
     * Add admin menu items
     */
    public function add_admin_menu() {
        // Main menu item
        add_menu_page(
            __('WhisperForms', 'whisperforms'),
            __('WhisperForms', 'whisperforms'),
            'manage_options',
            'whisperforms',
            array($this, 'render_dashboard_page'),
            'dashicons-feedback',
            30
        );
        
        // Forms submenu
        add_submenu_page(
            'whisperforms',
            __('All Forms', 'whisperforms'),
            __('All Forms', 'whisperforms'),
            'manage_options',
            'whisperforms',
            array($this, 'render_dashboard_page')
        );
        
        // Add new form
        add_submenu_page(
            'whisperforms',
            __('Add New', 'whisperforms'),
            __('Add New', 'whisperforms'),
            'manage_options',
            'whisperforms-new',
            array($this, 'render_form_builder_page')
        );
        
        // Entries
        add_submenu_page(
            'whisperforms',
            __('Entries', 'whisperforms'),
            __('Entries', 'whisperforms'),
            'manage_options',
            'whisperforms-entries',
            array($this, 'render_entries_page')
        );
        
        // Settings
        add_submenu_page(
            'whisperforms',
            __('Settings', 'whisperforms'),
            __('Settings', 'whisperforms'),
            'manage_options',
            'whisperforms-settings',
            array($this, 'render_settings_page')
        );
        
        // Integrations
        add_submenu_page(
            'whisperforms',
            __('Integrations', 'whisperforms'),
            __('Integrations', 'whisperforms'),
            'manage_options',
            'whisperforms-integrations',
            array($this, 'render_integrations_page')
        );
    }
    
    /**
     * Render the dashboard page
     */
    public function render_dashboard_page() {
        require_once WHISPERFORMS_PATH . 'admin/views/dashboard.php';
    }
    
    /**
     * Render the form builder page
     */
    public function render_form_builder_page() {
        require_once WHISPERFORMS_PATH . 'admin/views/form-builder.php';
    }
    
    /**
     * Render the entries page
     */
    public function render_entries_page() {
        require_once WHISPERFORMS_PATH . 'admin/views/entries.php';
    }
    
    /**
     * Render the settings page
     */
    public function render_settings_page() {
        require_once WHISPERFORMS_PATH . 'admin/views/settings.php';
    }
    
    /**
     * Render the integrations page
     */
    public function render_integrations_page() {
        require_once WHISPERFORMS_PATH . 'admin/views/integrations.php';
    }
    
    // Additional admin methods would go here...
}`}</code>
              </pre>
            </TabsContent>
            
            <TabsContent value="form" className="mt-4">
              <pre className="bg-slate-950 text-slate-50 p-4 rounded-md overflow-auto text-sm">
                <code>{`<?php
/**
 * Form Builder functionality for WhisperForms
 */
class WhisperForms_Form {
    /**
     * Form ID
     *
     * @var int
     */
    private $id = 0;
    
    /**
     * Form data
     *
     * @var array
     */
    private $data = array();
    
    /**
     * Form fields
     *
     * @var array
     */
    private $fields = array();
    
    /**
     * Constructor
     *
     * @param int $form_id Form ID
     */
    public function __construct($form_id = 0) {
        if ($form_id > 0) {
            $this->id = absint($form_id);
            $this->load();
        }
    }
    
    /**
     * Load form data from the database
     */
    private function load() {
        global $wpdb;
        
        $form_table = $wpdb->prefix . 'whisperforms_forms';
        $form = $wpdb->get_row($wpdb->prepare("SELECT * FROM {$form_table} WHERE id = %d", $this->id), ARRAY_A);
        
        if ($form) {
            $this->data = $form;
            $this->fields = json_decode($form['fields'], true);
        }
    }
    
    /**
     * Render the form for frontend display
     *
     * @return string HTML output
     */
    public function render() {
        if (empty($this->id) || empty($this->data)) {
            return '<p>Form not found.</p>';
        }
        
        ob_start();
        
        $form_id = $this->id;
        $form_data = $this->data;
        $fields = $this->fields;
        
        // Add form wrapper
        echo '<div class="whisperforms-container" id="whisperforms-' . esc_attr($form_id) . '">';
        
        // Form settings
        $form_settings = json_decode($form_data['settings'], true);
        $form_classes = !empty($form_settings['form_class']) ? $form_settings['form_class'] : '';
        
        // Start form
        echo '<form method="post" class="whisperforms-form ' . esc_attr($form_classes) . '" data-form-id="' . esc_attr($form_id) . '">';
        
        // Add nonce field for security
        wp_nonce_field('whisperforms_submit_form_' . $form_id, 'whisperforms_nonce');
        
        // Add form ID as hidden field
        echo '<input type="hidden" name="whisperforms_id" value="' . esc_attr($form_id) . '">';
        
        // Form title
        if (!empty($form_settings['show_title']) && $form_settings['show_title'] === true) {
            echo '<h3 class="whisperforms-title">' . esc_html($form_data['title']) . '</h3>';
        }
        
        // Form description
        if (!empty($form_settings['show_description']) && $form_settings['show_description'] === true && !empty($form_data['description'])) {
            echo '<div class="whisperforms-description">' . wp_kses_post($form_data['description']) . '</div>';
        }
        
        // Render fields
        if (!empty($fields) && is_array($fields)) {
            foreach ($fields as $field) {
                $this->render_field($field);
            }
        }
        
        // Submit button
        $submit_text = !empty($form_settings['submit_text']) ? $form_settings['submit_text'] : __('Submit', 'whisperforms');
        echo '<div class="whisperforms-submit">';
        echo '<button type="submit" class="whisperforms-submit-button">' . esc_html($submit_text) . '</button>';
        echo '</div>';
        
        // End form
        echo '</form>';
        
        // End container
        echo '</div>';
        
        // Add form scripts and styles
        $this->enqueue_form_assets();
        
        return ob_get_clean();
    }
    
    /**
     * Render a single field
     *
     * @param array $field Field data
     */
    private function render_field($field) {
        // Check if field is conditionally hidden
        if ($this->is_field_hidden($field)) {
            return;
        }
        
        // Get field type
        $type = !empty($field['type']) ? $field['type'] : 'text';
        
        // Get field ID
        $field_id = !empty($field['id']) ? $field['id'] : 'field_' . uniqid();
        
        // Field wrapper
        echo '<div class="whisperforms-field whisperforms-field-' . esc_attr($type) . '" id="whisperforms-field-' . esc_attr($field_id) . '">';
        
        // Field label
        if (!empty($field['label'])) {
            echo '<label class="whisperforms-label" for="' . esc_attr($field_id) . '">';
            echo esc_html($field['label']);
            
            // Required indicator
            if (!empty($field['required']) && $field['required'] === true) {
                echo ' <span class="whisperforms-required">*</span>';
            }
            
            echo '</label>';
        }
        
        // Field description (above)
        if (!empty($field['description_position']) && $field['description_position'] === 'above' && !empty($field['description'])) {
            echo '<div class="whisperforms-field-description">' . wp_kses_post($field['description']) . '</div>';
        }
        
        // Render field based on type
        switch ($type) {
            case 'text':
            case 'email':
            case 'number':
            case 'url':
            case 'tel':
                $this->render_input_field($field);
                break;
                
            case 'textarea':
                $this->render_textarea_field($field);
                break;
                
            case 'select':
                $this->render_select_field($field);
                break;
                
            case 'checkbox':
                $this->render_checkbox_field($field);
                break;
                
            case 'radio':
                $this->render_radio_field($field);
                break;
                
            case 'file':
                $this->render_file_field($field);
                break;
                
            // Additional field types would go here...
            
            default:
                do_action('whisperforms_render_field_' . $type, $field);
                break;
        }
        
        // Field description (below)
        if (empty($field['description_position']) || $field['description_position'] === 'below' && !empty($field['description'])) {
            echo '<div class="whisperforms-field-description">' . wp_kses_post($field['description']) . '</div>';
        }
        
        // Field error container
        echo '<div class="whisperforms-field-error" id="whisperforms-error-' . esc_attr($field_id) . '"></div>';
        
        // End field wrapper
        echo '</div>';
    }
    
    // Additional form rendering methods would go here...
}`}</code>
              </pre>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <p className="text-sm text-muted-foreground mt-4">
        This is a simplified preview of the WhisperForms WordPress plugin code structure. The actual plugin includes many more files and features.
      </p>
    </div>
  );
};

export default WordPressPlugin;
