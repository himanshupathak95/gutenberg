/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { Tip, ExternalLink } from '@wordpress/components';

function DownloadableBlocksNoResults() {
	return (
		<>
			<div className="block-editor-inserter__no-results">
				<p>{ __( 'No results found.' ) }</p>
			</div>
			<div className="block-editor-inserter__tips">
				<Tip>
					{ __( 'Interested in creating your own block?' ) }
					<br />
					<ExternalLink href="https://developer.wordpress.org/block-editor/">
						{ __( 'Get started here' ) }.
					</ExternalLink>
				</Tip>
			</div>
		</>
	);
}

export default DownloadableBlocksNoResults;
