/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   src/SavedRequestsPanel.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {html, css} from 'lit-element';

import {HistoryPanel} from '@advanced-rest-client/history-panel/src/HistoryPanel.js';

import {ProjectsListConsumerMixin} from '@advanced-rest-client/projects-list-consumer-mixin/projects-list-consumer-mixin.js';

import {SavedListMixin} from '@advanced-rest-client/saved-list-mixin/saved-list-mixin.js';

export {SavedRequestsPanel};

declare namespace UiElements {

  /**
   * Saved requests panel for ARC.
   *
   * Contains complete UI to support saved requests view.
   *
   * ### Styling
   *
   * `<saved-requests-panel>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--warning-primary-color` | Main color of the warning messages | `#FF7043`
   * `--warning-contrast-color` | Contrast color for the warning color | `#fff`
   * `--saved-requests-panel-fab-background-color` | Color of the fab button in the details panel | `--primary-color`
   * `--context-menu-item-color` | Color of the dropdown menu items | ``
   * `--context-menu-item-background-color` | Background olor of the dropdown menu items | ``
   * `--context-menu-item-color-hover` | Color of the dropdown menu items when hovering | ``
   * `--context-menu-item-background-color-hover` | Background olor of the dropdown menu items when hovering | ``
   */
  class SavedRequestsPanel extends
    RequestsListMixin(
    ProjectsListConsumerMixin(
    SavedListMixin(
    Object))) {
    readonly _list: any;
    readonly _projectSelectorContainer: any;

    /**
     * List of selected in the dialog project names.
     */
    selectedProjects: Array<String|null>|null;
    _unavailableTemplate(): any;
    _selectionOptionsTemplate(): any;
    _listTemplate(): any;
    _projectSelectorTemplate(): any;
    _toastsTemplate(): any;
    render(): any;
    connectedCallback(): void;

    /**
     * Computes a proper key command depending on the platform.
     *
     * @param key The key modifier for the command
     * @returns Keyboard command for the key.
     */
    _computeA11yCommand(key: String|null): String|null;

    /**
     * Opens request details editor in place of the request details applet.
     */
    _editRequestDetails(): void;

    /**
     * Handles menu click for adding selected requests to a project.
     */
    _projectSelected(): void;

    /**
     * Cancels adding to project dialog.
     */
    cancelAddProject(): void;

    /**
     * Updates requests objects with projects ids.
     *
     * @param requests List of requests to update
     * @param ids List of project IDs.
     */
    _updateRequestsProjects(requests: Array<object|null>|null, ids: Array<String|null>|null): Array<object|null>|null;

    /**
     * Adds selected requests to a project.
     */
    _addSelectedProject(): Promise<any>|null;

    /**
     * Dispatches `project-update-bulk` custom event and returns event's
     * promise.
     *
     * @param names List of names.
     * @param requestIds List of request IDs to associate with the project.
     */
    _createProjects(names: Array<String|null>|null, requestIds: Array<String|null>|null): Promise<Array<object|null>|null>;
    _prepareProjectsIdsList(created: any, ids: any): any;

    /**
     * Generates file name for the export options panel.
     */
    _generateFileName(): String|null;

    /**
     * Listens for Enter + cmd/ctrl button to accept project selection.
     */
    _projectAddKeydown(e: KeyboardEvent|null): void;
    _projectsHandler(e: any): void;
  }
}
